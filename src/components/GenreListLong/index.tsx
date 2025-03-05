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

    const filteredBooks = booksByGenre.filter(book =>
        book.titulo.toLowerCase().includes(props.search.toLowerCase()) ||
        book.autor.toLowerCase().includes(props.search.toLowerCase())
    );

    return(
        <>
            <section className={styles.genreListLong}>

                <Link to={"/"}>
                <div className={styles.topSection}>
                    <div className={styles.arrow}>
                        <img src={arrow} className={styles.arrowStatic}></img>
                        <img src={arrowHovered} className={styles.arrowHovered}></img>
                    </div>
                    <h1>{props.genre}</h1>
                </div>
                </Link>

                <ul className={styles.books}>
                    {filteredBooks.map(book => (
                        <Link to={`/livro/${book.id}`}><li key={book.id} className={styles.book}>
                            <div className={styles.bookCover}>
                                <img src={book.capa} alt="Capa do livro"></img>
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.titleAuthor}>
                                    <h2 
                                        className={book.titulo.length < 26 ? styles.title : 
                                        book.titulo.length < 32 ? styles.titleSmall : styles.titleSmallest
                                    }>{book.titulo}</h2>
                                    <div className={styles.priceSection}>
                                        <h3
                                            className={book.autor.length < 19 ? styles.author : 
                                            book.autor.length < 24 ? styles.authorSmall : styles.authorSmallest}
                                        >{book.autor}</h3>
                                        <span>R$ {String(book.preco.toFixed(2)).replace('.', ',')}</span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </li></Link>
                    ))}
                </ul>
            </section>
        </>
    )
}
