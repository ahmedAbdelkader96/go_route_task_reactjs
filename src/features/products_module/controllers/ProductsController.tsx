import ProductsRepo from "../repo/ProductsRepo";
import { useProductsStore } from "../stores/useProductsStore";

class ProductsController {
  private productsRepo: ProductsRepo;

  constructor() {
    this.productsRepo = new ProductsRepo();
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  async fetchProducts(query = ""): Promise<void> {
    const { page, limit, setLoading, setProducts, setError } =
      useProductsStore.getState();
    setLoading(true);
    try {
      const products = await this.productsRepo.fetchProducts(
        query,
        page,
        limit
      );
      setProducts(products);
    } catch (error: any) {
      if (error.response?.status === 401) {
        return;
      }
      console.error("Unexpected error fetching products in Controller:", error);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
}

export default ProductsController;
