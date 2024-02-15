const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema(
  {
    description: String,
    amount: String,
    category: String,
  },
  { timestamps: true }
);

const Saving = mongoose.model("Saving", savingSchema);

module.exports = Saving;
