import styles from './styles.module.css';
import Book from '../../types/Book';
import { Link } from 'react-router-dom';

interface GenreListShortProps {
    books: Book[];
    genre: string;
}

export default function GenreListShort(props: GenreListShortProps) {
    const getBooksByGenre = (genre: string) => {
        return props.books.filter(book => book.genero === genre).slice(0, 4);
    };
    const booksByGenre = getBooksByGenre(props.genre);

    return(
        <>
            <section className={styles.genreListShort}>
                <div className={styles.topSection}>
                    <h1>{props.genre}</h1>
                    <Link to={`/genero/${props.genre}`}><p>Ver mais</p></Link>
                </div>
                <ul className={styles.books}>
                    {booksByGenre.map(book => (
                        <Link to={`/livro/${book.id}`}><li key={book.id} className={styles.book}>
                            <div className={styles.bookCover}>
                                <img src={book.capa} alt="Capa do livro"></img>
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.titleAuthor}>
                                    <h2
                                        className={
                                            book.titulo.length < 28 ? styles.title : 
                                            book.titulo.length < 40 ? styles.titleSmall : styles.titleSmallest
                                        }
                                    >{book.titulo}</h2>
                                    <h3>{book.autor}</h3>
                                </div>
                                <div className={styles.priceSection}>
                                    <span>R$ {String(book.preco.toFixed(2)).replace('.', ',')}</span>
                                </div>
                            </div>
                        </li></Link>
                    ))}
                </ul>
            </section>
        </>
    )
}
