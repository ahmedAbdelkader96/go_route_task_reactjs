import { create } from "zustand";
import ProductsController from "../controllers/ProductsController";
import ProductModel from "../models/ProductModel";

interface ProductsStore {
  products: ProductModel[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
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
    error: null,
    page: 1,
    limit: 10,
    setLoading: (loading: boolean) => set({ loading }),
    setProducts: (products: ProductModel[]) => set({ products }),
    setError: (error: string | null) => set({ error }),
    setPage: (page: number) => set({ page }),
    fetchProducts: async (query: string) => {
      const { page, limit } = useProductsStore.getState();
      await productsController.fetchProducts(query);
    },
  };
});

export default useProductsStore;
