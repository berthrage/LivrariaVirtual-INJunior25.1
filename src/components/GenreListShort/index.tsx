import styles from './styles.module.css';
import Book from '../../types/Book';

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
                    <p>Ver mais</p>
                </div>
                <ul className={styles.books}>
                    {booksByGenre.map(book => (
                        <li key={book.id} className={styles.book}>
                            <div className={styles.bookCover}>
                                <img src={book.capa} alt="Capa do livro"></img>
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.titleAuthor}>
                                    <h2>{book.titulo}</h2>
                                    <h3>{book.autor}</h3>
                                </div>
                                <div className={styles.priceSection}>
                                    <span>R$ {String(book.preco.toFixed(2)).replace('.', ',')}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
