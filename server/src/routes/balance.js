const { Router } = require("express");
const { Expenses, Income } = require("../db.js");
const { Op } = require("sequelize");

const routerBalance = Router();

// Add expenses on DB
routerBalance.post("/", async (req, res, next) => {
  try {
    const { title, description, amount } = req.body;
    let newExpenses = await Expenses.create({
      title,
      description,
      amount,
    });
    res.status(200).json(newExpenses);
  } catch (error) {
    console.error("Error in creation:", error.message);
    res.status(404).json("error");
  }
});

module.exports = routerBalance;
