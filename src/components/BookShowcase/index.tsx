import styles from "./styles.module.css";
import Book from "../../types/Book";
import PrimaryButton from "../PrimaryButton";
import useCartStore from "../../stores/CartStore";
import BackArrowText from "../BackArrowText";

interface BookShowcaseProps {
    book: Book;
}

export default function BookShowcase(props: BookShowcaseProps) {
    const { addToCart } = useCartStore();

    return (
        <>
            <section className={styles.bookShowcase}>

                <BackArrowText text='Detalhes do livro'></BackArrowText>

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