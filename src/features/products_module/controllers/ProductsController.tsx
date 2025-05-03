import ProductsRepo from "../repo/ProductsRepo";
import { useProductsStore } from "../stores/useProductsStore"; 

class ProductsController {
  private productsRepo: ProductsRepo;

  constructor() {
    this.productsRepo = new ProductsRepo();
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  async fetchProducts(query = ""): Promise<void> {
    const { page, limit ,setLoading, setProducts, setError } = useProductsStore.getState(); // Access Zustand store methods
    setLoading(true);
    try {
      const products = await this.productsRepo.fetchProducts(query,page,limit); // Fetch products using the repository
      setProducts(products);
    }catch (error: any) {
      if (error.response?.status === 401) {
        return;
      }
      console.error("Unexpected error fetching products in Controller:", error);
      setError("Failed to fetch products. Please try again later."); // Set a user-friendly error message
    } finally {
      setLoading(false);
    }
  }
}

export default ProductsController;