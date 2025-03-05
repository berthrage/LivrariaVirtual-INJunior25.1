import { useEffect, useState } from 'react';
import BackArrowText from '../../components/BackArrowText';
import useBooksStore from '../../stores/BooksStore';
import useCartStore from '../../stores/CartStore';
import styles from './srtyles.module.css';
import CartItem from '../../components/CartItem';
import PrimaryButton from '../../components/PrimaryButton';

export default function CartPage() {
    const { cart, validateCart, loadCart, clearCart, totalPrice, calculateTotalPrice } = useCartStore();
    const { books, fetchBooks } = useBooksStore();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    useEffect(() => {
        loadCart();
        if (books.length > 0) {
            validateCart(books);
        }
    }, [fetchBooks]);

    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    return(
        <>
            <section className={styles.cartPageSection}>

                <BackArrowText text='Carrinho'></BackArrowText>
                <div className={styles.cartBox}>

                    <div className={styles.checkout}>

                        <div className={styles.checkoutText}>
                            <h2>Total ({cart.length > 1 ? `${cart.length} itens`: `${cart.length} item`})</h2>
                            <h1>R$ {String(totalPrice.toFixed(2)).replace('.', ',')}</h1>
                        </div>

                        <div className={styles.checkoutButtons}>

                            <PrimaryButton>
                                Checkout
                            </PrimaryButton>

                            <PrimaryButton
                                onClick={() => clearCart()}
                                id={styles.clearCartButton}>
                                Limpar carrinho
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className={styles.items}>
                    {cart.map(cartProduct => (
                            <>
                                <CartItem cartProduct={cartProduct}></CartItem>
                            </>
                        ))
                    }
                    </div>

                </div>
            </section>
        </>
    )
}