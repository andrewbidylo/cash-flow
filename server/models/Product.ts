import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const Currency = require('mongoose-currency').loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      type: Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expense: {
      type: Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;