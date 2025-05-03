import { create } from "zustand";
import ProductsController from "../controllers/ProductsController";
import ProductModel from "../models/ProductModel";

interface ProductsStore {
  products: ProductModel[];
  loading: boolean;
  error: string | null;
  page: number; // Properly type page
  limit: number; // Properly type limit
  setLoading: (loading: boolean) => void;
  setProducts: (products: ProductModel[]) => void;
  fetchProducts: (query: string) => Promise<void>;
  setError: (error: string | null) => void;
  setPage: (page: number) => void;
}

export const useProductsStore = create<ProductsStore>((set) => {
  const productsController = new ProductsController();

  return {
    products: [],
    loading: false,
    error: null, // Initialize error state
    page: 1, // Initialize page state
    limit: 10, // Initialize limit state
  
    setLoading: (loading: boolean) => set({ loading }),
    setProducts: (products: ProductModel[]) => set({ products }),
    setError: (error: string | null) => set({ error }), // Set error state
    setPage: (page: number) => set({ page }),
    fetchProducts: async (query: string) => {
      const { page, limit } = useProductsStore.getState(); // Access page and limit from the store
      await productsController.fetchProducts(query);
    },
  };
});

export default useProductsStore;
