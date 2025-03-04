import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import useBooksStore from '../../stores/BooksStore';
import GenreListLong from '../../components/GenreListLong';

export default function GenrePage() {
    const { books, fetchBooks, errorCode } = useBooksStore();
    const { genero } = useParams<string>();
    const [ genreFound, setGenreFound ] = useState(false);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    useEffect(() => {
        if (books.length > 0) {
            const genreExists = books.some(book => book.genero === genero);
            setGenreFound(genreExists);
        }
    }, [books, genero]);

    return(
        <>
            <section className={styles.genrePageSection}>
                {books.length === 0 ? (
                    <h1>{errorCode ? `Erro ${errorCode} ao carregar livros` : 'Carregando livros...'}</h1>
                ) : genreFound ? (
                    <>
                        <GenreListLong 
                            books={books}
                            genre={genero}
                            search=''>
                        </GenreListLong>
                    </>
                ) : (
                    <h1>Gênero não encontrado</h1>
                )}
                
            </section>
        </>
    )
}