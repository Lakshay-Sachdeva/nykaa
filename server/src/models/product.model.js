const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: false },
    price: { type: String, required: false},
    color: { type: String, required: false },
    brand: { type: String, required: false },
    image: [{ type: String, required: false }],
    discount: { type: String, required: false },
    Skintone: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("product", productSchema);
module.exports = Product;
