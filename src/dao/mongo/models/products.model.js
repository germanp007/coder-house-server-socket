import mongoose from "mongoose";

const productsCollection = "ecommerce";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  decription: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Calzado", "Ropa", "Tecnologia", "Deportes"],
  },
  thumbnail: String,
});

export const productsModel = mongoose.model(productsCollection, productSchema);
