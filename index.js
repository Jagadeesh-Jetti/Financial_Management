const express = require("express");
const app = express();

const mongoose = require("mongoose");
const database = require("./db");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/trail2")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("Mongo Error", err));

database();

const IncomeRouter = require("./routers/income.router");
const ExpensesRouter = require("./routers/expenses.router");
const SavingsRouter = require("./routers/savings.router");

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Financial Management backend");
});

app.use("/incomes", IncomeRouter);
app.use("/expenses", ExpensesRouter);
app.use("/savings", SavingsRouter);

app.listen(3000, () => console.log("Fima backend server started"));
