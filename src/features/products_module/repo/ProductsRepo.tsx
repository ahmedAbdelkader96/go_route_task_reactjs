import { securedApiClient } from "../../../global/services/apiClient.jsx";
import ProductModel from "../models/ProductModel.tsx";

class ProductsRepo {
  async fetchProducts(
    query = "",
    page: number,
    limit: number
  ): Promise<ProductModel[]> {
    const response = await securedApiClient.get("/products", {
      params: {
        query,
        page,
        limit,
      },
    });
    console.log("Response status:", response.status);
    const products = response.data;
    console.log("Products fetched:", products.length);

    // Decode JSON data into a list of BlogModel instances
    return products.map((product: ProductModel) =>
      ProductModel.fromJSON(product)
    );
  }
}

export default ProductsRepo;
