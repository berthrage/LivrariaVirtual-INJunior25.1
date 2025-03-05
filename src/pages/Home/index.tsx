import styles from './styles.module.css'
import banner from '../../assets/images/banner.png'
import { useEffect } from 'react';
import Book from '../../types/Book';
import GenreListShort from '../../components/GenreListShort';
import useBooksStore from '../../stores/BooksStore';
import useCartStore from '../../stores/CartStore';

export default function Home() {
    const { books, fetchBooks, errorCode } = useBooksStore();
    const { loadCart } = useCartStore();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    useEffect(() => {
        loadCart();
    }, []);

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