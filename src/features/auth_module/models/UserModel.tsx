export default class UserModel {
  id?: string;
  name: string;
  jobTitle: string;
  email: string;
  password?: string; // Optional password field
  createdAt?: Date;

  constructor({
    id,
    name,
    jobTitle,
    email,
    password,
    createdAt,
  }: {
    id?: string;
    name: string;
    jobTitle: string;
    email: string;
    password?: string; // Optional parameter
    createdAt?: Date;
  }) {
    this.id = id;
    this.name = name;
    this.jobTitle = jobTitle;
    this.email = email;
    this.password = password; // Set password if provided
    this.createdAt = createdAt;
  }

  toJSON() {
    return {
      name: this.name,
      jobTitle: this.jobTitle,
      email: this.email,
      password: this.password ? this.password : undefined,
    };
  }

  static fromJSON(json: any): UserModel {
    if (!json) {
      throw new Error("Invalid JSON data for UserModel");
    }
    return new UserModel({
      id: json.id,
      name: json.name,
      jobTitle: json.jobTitle,
      email: json.email,
      createdAt: json.createdAt ? new Date(json.createdAt) : undefined, // Convert ISO string to Date
    });
  }
}
