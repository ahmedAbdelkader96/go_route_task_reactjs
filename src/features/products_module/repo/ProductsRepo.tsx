import { securedApiClient } from "../../../global/services/apiClient";
import ProductModel from "../models/ProductModel";

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
    const products = response.data;
    return products.map((product: ProductModel) =>
      ProductModel.fromJSON(product)
    );
  }
}

export default ProductsRepo;
