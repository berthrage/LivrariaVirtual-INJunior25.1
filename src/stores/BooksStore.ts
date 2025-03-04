import { create } from 'zustand';
import api from '../services/api';
import Book from '../types/Book';

interface BooksStore {
    books: Book[];
    errorCode: number | null;
    isFetching: boolean;
    fetchBooks: () => Promise<void>;
}

const useBooksStore = create<BooksStore>((set: any, get: any) => ({
  books: [],
  errorCode: null,
  isFetching: false,

  fetchBooks: async () => {
    if (get().books.length > 0 || get().isFetching) return; // Avoid refetch if already fetched or fetching

    set({ isFetching: true });

    try {
      const response = await api.get('');
      console.log(response.data);
      set({ books: response.data, errorCode: null });

    } catch (error) {
        const err : any = error; 
        console.error('Requisição da API falhou:', err.response);
        set({ errorCode: err.response?.status || 500 });
        setTimeout(() => {
            console.log('Tentando novamente...');
            set({ books: [] }); // Reset books for retry
            get().fetchBooks(); // Retry 
        }, 5000);

    } finally {
      set({ isFetching: false });
    }
  },
}));

export default useBooksStore;