const express = require("express");

const IncomeRouter = express.Router();
const Income = require("../models/income.model");

IncomeRouter.get("/", async (req, res) => {
  try {
    const incomeData = await Income.find();
    res.json(incomeData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching income data:", error });
  }
});

IncomeRouter.post("/", async (req, res) => {
  const { description, amount, category } = req.body;

  try {
    const updateIncome = new Income({ description, amount, category });
    await updateIncome.save();
    res.status(201).json(updateIncome);
  } catch (error) {
    res.status(500).json({ error: "Error adding income:", error });
  }
});

module.exports = IncomeRouter;
