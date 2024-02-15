const express = require("express");

const SavingsRouter = express.Router();
const Saving = require("../models/savings.model");

SavingsRouter.get("/", async (req, res) => {
  try {
    const savingsData = await Saving.find();
    res.json(savingsData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching all the savings" });
  }
});

SavingsRouter.post("/", async (req, res) => {
  const { description, amount, category } = req.body;

  try {
    const newSaving = new Saving({ description, amount, category });
    await newSaving.save();
    res.status(201).json(newSaving);
  } catch (error) {
    res.status(500).json({ error: "Error while adding a saving entry" });
  }
});

module.exports = SavingsRouter;
