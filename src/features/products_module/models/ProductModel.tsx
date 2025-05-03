export default class ProductModel {
  id: string;
  title: string;
  description: string;
  price?: number;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
  date: Date;
  image: string;

  constructor({ id, title, description, price, category, createdAt, updatedAt,image }: {
    id: string;
    title: string;
    description: string;
    price?: number;
    category?: string;
    createdAt?: Date;
    updatedAt?: Date;
    image: string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.image = image;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      price: this.price,
      category: this.category,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      image: this.image,
    };
  }

  static fromJSON(json: any): ProductModel {
    return new ProductModel({
      id: json.id,
      title: json.title,
      description: json.description,
      price: json.price,
      category: json.category,
      createdAt: new Date(json.createdAt),
      updatedAt: new Date(json.dupdatedAtate),
      image: json.image,
    });
  }
}