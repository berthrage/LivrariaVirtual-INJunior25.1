import styles from "./styles.module.css";
import Book from "../../types/Book";
import { Link } from "react-router-dom";
import arrow from '../../assets/icons/Arrow.png';
import arrowHovered from '../../assets/icons/Arrow-hovered.png';
import PrimaryButton from "../PrimaryButton";
import useCartStore from "../../stores/CartStore";

interface BookShowcaseProps {
    book: Book;
}

export default function BookShowcase(props: BookShowcaseProps) {
    const { addToCart } = useCartStore();

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

                <div className={styles.book}>
                    <div className={styles.bookCoverBox}>
                        <div className={styles.bookCover}>
                            <img src={props.book.capa} alt="Capa do livro"></img>
                        </div>
                    </div>

                    <div className={styles.bookInfo}>
                        <div className={styles.titleAuthor}>
                            <h2>{props.book.titulo}</h2>
                            <h3>{props.book.autor}</h3>
                        </div>
                        <div className={styles.synopsisSection}>
                            <h1>Sinopse</h1>
                            <p>{props.book.sinopse}</p>
                        </div>
                        <div className={styles.priceSection}>
                            <PrimaryButton
                                id={styles.button}
                                onClick={() => addToCart(props.book)}>
                                <span>R$ {String(props.book.preco.toFixed(2)).replace('.', ',')}</span>
                                <p>Adicionar ao carrinho</p>
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                
            </section>
        </>
    )
}