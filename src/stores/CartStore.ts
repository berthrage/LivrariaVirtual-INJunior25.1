import { create } from "zustand";
import Book from "../types/Book";
import CartProduct from "../types/CartProduct";

interface CartStore {
    cart: CartProduct[];
    totalPrice: number;
    addToCart: (book: Book) => void;
    removeFromCart: (productId: number) => void;
    validateCart: (books: Book[]) => void;
    loadCart: () => void;
    clearCart: () => void;
    calculateTotalPrice: () => void;
}

const useCartStore = create<CartStore>((set: any, get: any) => {
    const savedCart = localStorage.getItem('cart');
    const initialCart: CartProduct[] = savedCart ? JSON.parse(savedCart) : [];
    
    return ({
        cart: initialCart,
        totalPrice: 0,
        
        addToCart: (book: Book) => {
            if (get().cart.length < 99) {
                const newCart: CartProduct[] = [...get().cart];
                const newCartProduct: CartProduct = {
                    book: book,
                    productId: 0,
                }
                newCart.unshift(newCartProduct);
                for(let i = 0; i < newCart.length; i++) {
                    newCart[i].productId = i;
                }
                set({cart: newCart});
                localStorage.setItem("cart", JSON.stringify(newCart));
                console.log(get().cart);
            }
        },

        removeFromCart: (productId: number) => {
            let newCart: CartProduct[] = [...get().cart];
            newCart = newCart.filter(product => product.productId !== productId);
            for(let i = 0; i < newCart.length; i++) {
                newCart[i].productId = i;
            }
            set({ cart: newCart });
            localStorage.setItem("cart", JSON.stringify(newCart));
            console.log(get().cart);
        },

        validateCart: (books: Book[]) => {
            let newCart: CartProduct[] = [...get().cart];
            newCart = newCart.filter(
              (cartProduct) =>
                books.some((book) => book.id === cartProduct.book.id) 
            );

            set({ cart: newCart });
            localStorage.setItem("cart", JSON.stringify(newCart));
            console.log(get().cart);
        },

        loadCart: () => {
            const savedCart = localStorage.getItem("cart");
            if(savedCart) {
                set({cart: JSON.parse(savedCart)});
            }
        },

        clearCart: () => {
            const newCart: CartProduct[] = [];
            set({cart: newCart});
            localStorage.setItem("cart", JSON.stringify(newCart));
        },

        calculateTotalPrice: () => {
            let price = 0;
            for (let product of get().cart) {
                price += product.book.preco;
            }
            set({totalPrice: price});
        }

    })
});

export default useCartStore;