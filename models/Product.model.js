const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  category: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true, maxlength: 38 },
  brand: { type: String, required: true, trim: true },
  cost: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, maxlength: 500 },
  color: { type: String, required: true },
  image_url: [{ type: String, default: "https://static.fnac-static.com/multimedia/Images/PT/MC/85/71/ae/11432325/1540-1/tsp20180412122128/Oculos-de-Sol-Polaroid-Pld-6041-S-GREY-PZ.jpg" }],
  qtt_in_stock: { type: Number, required: true, default: 1 },
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;