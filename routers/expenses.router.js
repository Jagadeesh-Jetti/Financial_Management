const express = require("express")

const ExpensesRouter = express.Router()
const Expense = require("../models/expenses.model")

ExpensesRouter.get("/", async (req, res) => {
    try{
        const expenseData = await Expense.find()
        res.json(expenseData)
    }
    catch(error){
        res.status(500).json({ error : "Error while getting expense data:", error})
    }
})

ExpensesRouter.post("/", async (req, res) => {
    const {description, amount, category} = req.body
    try{
        const newExpense = new Expense({ description, amount, category})
        await newExpense.save() 
    }
    catch(error){
        res.status(500).json({ error : "Error while adding expense:", error})
    }
})

module.exports = ExpensesRouter