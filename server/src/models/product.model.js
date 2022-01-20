const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    image: [{ type: String, required: true }],
    discount: { type: String, required: true },
    Skintone: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("product", productSchema);
module.exports = Product;
