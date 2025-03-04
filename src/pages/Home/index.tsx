import styles from './styles.module.css'
import banner from '../../assets/images/banner.png'
import { useEffect, useState } from 'react';
import Book from '../../types/Book';
import api from '../../services/api';
import GenreListShort from '../../components/GenreListShort';

export default function Home() {
    const [ books, setBooks ] = useState<Book[]>([]);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    useEffect(() => {
        if (books.length === 0) { 
            api.get('')
                .then(response => {
                    console.log(response.data);
                    setBooks(response.data); 
                })
                .catch(error => {
                    console.error("Requisição da API falhou:", error.response);
                    setErrorCode(error.response?.status || 500);
                    setTimeout(() => {
                        console.log("Tentando novamente...");
                        setBooks([]); // Reset books to trigger the effect again
                    }, 5000); 
                });
        }
    }, [books]); 

    const getOneBookPerGenre = () => {
        const uniqueBooks: Book[] = [];
        const seenGenres = new Set<string>();
    
        for (let i = 0; i < books.length; i++) {
            if (!seenGenres.has(books[i].genero)) {
                seenGenres.add(books[i].genero);
                uniqueBooks.push(books[i]);
            }
        }
        return uniqueBooks;
    };
    const uniqueBooks = getOneBookPerGenre();

    return(
        <> 
            <section className={styles.homeSection}>
                <img className={styles.banner} src={banner} alt="Banner"></img>
                {books.length === 0 ? (
                    <h1>{errorCode ? `Erro ${errorCode} ao carregar livros` : 'Carregando livros...'}</h1>
                ) : (
                    uniqueBooks.map(book =>
                        <GenreListShort key={book.id} books={books} genre={book.genero}></GenreListShort>
                    )
                )}
            </section>
        </>
    )
}