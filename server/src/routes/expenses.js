const { Router } = require("express");
const { Expenses, Income } = require("../db.js");
const { Op } = require("sequelize");

const routerExpenses = Router();

// Add expenses on DB
routerExpenses.post("/", async (req, res, next) => {
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

// Get all expenses from DB
routerExpenses.get("/", async (req, res, next) => {
  try {
    let newExpenses = await Expenses.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).json(newExpenses);
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

// Get 10 lastest income from DB
routerExpenses.get("/latestExpenses", async (req, res, next) => {
  try {
    let newExpenses = await Expenses.findAll({
      limit: 10,
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).json(newExpenses);
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

// Get a single expenses by id
routerExpenses.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let expenses = await Expenses.findByPk(id);
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

// Edit expenses on DB
routerExpenses.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let expenses = await Expenses.findByPk(id);
    const { title, description, amount } = req.body;
    await expenses.update({ title, description, amount });
    await expenses.save();
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error in updating:", error.message);
    res.status(404).json("error");
  }
});

// Delete expenses on DB
routerExpenses.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let expenses = await Expenses.findByPk(id);
    await expenses.destroy();
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error in deleting:", error.message);
    res.status(404).json("error");
  }
});

module.exports = routerExpenses;
