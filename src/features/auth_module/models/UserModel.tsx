export default class UserModel {
  id?: string;
  name: string;
  jobTitle: string;
  email: string;
  createdAt?: Date;

  constructor({
    id,
    name,
    jobTitle,
    email,
    createdAt,
  }: {
    id?: string;
    name: string;
    jobTitle: string;
    email: string;
    createdAt?: Date;
  }) {
    this.id = id;
    this.name = name;
    this.jobTitle = jobTitle;
    this.email = email;
    this.createdAt = createdAt;
  }

  toJSON() {
    return {
      name: this.name,
      jobTitle: this.jobTitle,
      email: this.email,
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
