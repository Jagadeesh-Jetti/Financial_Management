const express = require("express");
const cors = require("cors");
const app = express();

const dataBase = require("./db");

const IncomeRouter = require("./routers/income.router");
const ExpensesRouter = require("./routers/expenses.router");
const SavingsRouter = require("./routers/savings.router");

dataBase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Financial Management backend");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use("/incomes", IncomeRouter);
app.use("/expenses", ExpensesRouter);
app.use("/savings", SavingsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
