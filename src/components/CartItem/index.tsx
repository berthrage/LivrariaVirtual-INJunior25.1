import { Link } from 'react-router-dom';
import CartProduct from '../../types/CartProduct';
import styles from './styles.module.css';
import PrimaryButton from '../PrimaryButton';
import useCartStore from '../../stores/CartStore';

interface CartItemProps {
    cartProduct: CartProduct;
}

export default function CartItem(props: CartItemProps) {
    const { removeFromCart } = useCartStore();

    return (
        <>
            <section className={styles.cartItemSection}>

                <div className={styles.book}>
                    <Link to={`/livro/${props.cartProduct.book.id}`}>
                        <div className={styles.bookInfoBox}>

                            <div className={styles.productOrder}>
                                <h1>{props.cartProduct.productId + 1}</h1>
                            </div>

                            <div className={styles.bookCover}>
                                <img src={props.cartProduct.book.capa} alt="Capa do livro"></img>
                            </div>
                            
                            <div className={styles.bookInfo}>
                                <div className={styles.titleAuthor}>
                                    <h2
                                        className={
                                            props.cartProduct.book.titulo.length < 28 ? styles.title :
                                                props.cartProduct.book.titulo.length < 40 ? styles.titleSmall : styles.titleSmallest
                                        }
                                    >{props.cartProduct.book.titulo}</h2>
                                    <h3>{props.cartProduct.book.autor}</h3>
                                </div>
                            </div>


                        </div>
                    </Link>
                    
                    <div className={styles.menuSection}>              
                        <PrimaryButton
                            onClick={()=> removeFromCart(props.cartProduct.productId)}
                            id={styles.removeButton}
                            width={100}
                            overrideMediaQuery={true}>
                                Remover
                        </PrimaryButton>

                        <div className={styles.priceSection}>
                                    <span>R$ {String(props.cartProduct.book.preco.toFixed(2)).replace('.', ',')}</span>
                                </div>
                    </div>  
                </div>
                

            </section>
        </>
    )
}