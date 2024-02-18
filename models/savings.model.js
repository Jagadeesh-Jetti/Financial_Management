const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema(
  {
    description: String,
    amount: Number,
    category: String,
  },
  { timestamps: true }
);

const Saving = mongoose.model("Saving", savingSchema);

module.exports = Saving;
