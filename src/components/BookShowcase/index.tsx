import styles from "./styles.module.css";
import Book from "../../types/Book";
import { Link } from "react-router-dom";
import arrow from '../../assets/icons/Arrow.png';
import arrowHovered from '../../assets/icons/Arrow-hovered.png';

interface BookShowcaseProps {
    book: Book;
}

export default function BookShowcase(props: BookShowcaseProps) {
    return (
        <>
            <section className={styles.bookShowcase}>

                <Link to={"/"}>
                <div className={styles.topSection}>
                    <div className={styles.arrow}>
                        <img src={arrow} className={styles.arrowStatic}></img>
                        <img src={arrowHovered} className={styles.arrowHovered}></img>
                    </div>
                    <h1>Detalhes do Livro</h1>
                </div>
                </Link>

                <div className={styles.bookCover}>
                    <img src={props.book.capa} alt="Capa do livro"></img>
                </div>
                <div className={styles.bookInfo}>
                    <div className={styles.titleAuthor}>
                        <h2
                            className={
                                props.book.titulo.length < 28 ? styles.title :
                                props.book.titulo.length < 40 ? styles.titleSmall : styles.titleSmallest
                            }
                        >{props.book.titulo}</h2>
                        <h3>{props.book.autor}</h3>
                    </div>
                    <div className={styles.priceSection}>
                        <span>R$ {String(props.book.preco.toFixed(2)).replace('.', ',')}</span>
                    </div>
                </div>
            </section>
        </>
    )
}