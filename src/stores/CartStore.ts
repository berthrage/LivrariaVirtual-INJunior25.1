import { create } from "zustand";
import Book from "../types/Book";
import CartProduct from "../types/CartProduct";

interface CartStore {
    cart: CartProduct[];
    addToCart: (book: Book) => void;
    loadCart: () => void;
    clearCart: () => void;
}

const useCartStore = create<CartStore>((set: any, get: any) => {
    const savedCart = localStorage.getItem('cart');
    const initialCart: CartProduct[] = savedCart ? JSON.parse(savedCart) : [];
    
    return ({
        cart: initialCart,
        
        addToCart: (book: Book) => {
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
        }

    })
});

export default useCartStore;