const { Router } = require("express");
const { Expenses, Income } = require("../db.js");
const { Op } = require("sequelize");

const routerBalance = Router();

const sumArray = (array) => {
  const arrayFromObject = array.map((e) => e["amount"]);
  console.log(arrayFromObject);
  return arrayFromObject.reduce((a, b) => a + b, 0);
};

// Add expenses on DB
routerBalance.get("/", async (req, res, next) => {
  try {
    let arrayIncome = await Income.findAll({
      attributes: ["amount"],
    });
    let arrayExpenses = await Expenses.findAll({
      attributes: ["amount"],
    });
    let totalIncome = sumArray(arrayIncome);
    let totalExpenses = sumArray(arrayExpenses);
    res.status(200).json({ balance: totalIncome - totalExpenses });
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

module.exports = routerBalance;
