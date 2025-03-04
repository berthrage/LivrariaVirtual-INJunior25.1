import styles from './styles.module.css';
import Book from '../../types/Book';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/Arrow.png';
import arrowHovered from '../../assets/icons/Arrow-hovered.png';

interface GenreListLongProps {
    books: Book[];
    genre: string | undefined;
    search: string;
}

export default function GenreListLong(props: GenreListLongProps) {
    const getBooksByGenre = (genre: string) => {
        return props.books.filter(book => book.genero === genre);
    };
    const booksByGenre = getBooksByGenre(props.genre? props.genre : '');

    return(
        <>
            <section className={styles.genreListLong}>
                <div className={styles.topSection}>
                    <div className={styles.arrow}>
                        <Link to={"/"}>
                            <img src={arrow} className={styles.arrowStatic}></img>
                            <img src={arrowHovered} className={styles.arrowHovered}></img>
                        </Link>
                    </div>
                    <h1>{props.genre}</h1>
                </div>
                <ul className={styles.books}>
                    {booksByGenre.map(book => (
                        <li key={book.id} className={styles.book}>
                            <div className={styles.bookCover}>
                                <img src={book.capa} alt="Capa do livro"></img>
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.titleAuthor}>
                                    <h2 
                                        className={book.titulo.length < 28 ? styles.title : 
                                        book.titulo.length < 40 ? styles.titleSmall : styles.titleSmallest
                                    }>{book.titulo}</h2>
                                    <div className={styles.priceSection}>
                                        <h3>{book.autor}</h3>
                                        <span>R$ {String(book.preco.toFixed(2)).replace('.', ',')}</span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
