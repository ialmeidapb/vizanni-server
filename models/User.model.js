const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    required: true,
    default: "USER",
  },
  address: {
    street: { type: String, required: true, trim: true },
    neighbourhood: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    postCode: { type: String, required: true, trim: true },
    stateOrProvince: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
  },
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
