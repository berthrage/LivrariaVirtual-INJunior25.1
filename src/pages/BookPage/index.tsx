import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import useBooksStore from '../../stores/BooksStore';
import Book from '../../types/Book';
import BookShowcase from '../../components/BookShowcase';

export default function BookPage() {
    const { books, fetchBooks, errorCode } = useBooksStore();
    const { livroId } = useParams<string>();
    const [ book, setBook ] = useState<Book>();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    useEffect(() => {
        if (books.length > 0) {
            const foundBook = books.find(book => book.id === livroId);
            if (foundBook) {
                setBook(foundBook);
            } 
        }
    }, [books, livroId]);

    return(
        <>
            <section className={styles.bookPageSection}>

                {books.length === 0 ? (
                    <h1>{errorCode ? `Erro ${errorCode} ao carregar livro` : 'Carregando livros...'}</h1>
                ) : book ? (
                    <>
                        <BookShowcase book={book}></BookShowcase>   
                    </>
                ) : (
                    <h1>404 Livro não encontrado</h1>
                )}
                
            </section>
        </>
    )
}