import styles from './styles.module.css'
import banner from '../../assets/images/banner.png'
import { useEffect, useState } from 'react';
import Book from '../../types/Book';
import api from '../../services/api';
import GenreListShort from '../../components/GenreListShort';

export default function Home() {
    const [ books, setBooks ] = useState<Book[]>([]);

    useEffect(() => {
        api.get('').then(response => {
            console.log(response.data);
            setBooks(response.data);
        });
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
                {uniqueBooks.map(book => 
                    <GenreListShort key={book.id} books={books} genre={book.genero}></GenreListShort>
                )}
            </section>
        </>
    )
}