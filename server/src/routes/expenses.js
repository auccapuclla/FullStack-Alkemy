const { Router } = require("express");
const { Expenses, Income } = require("../db.js");
const { Op, Sequelize, sequelize } = require("sequelize");

const routerExpenses = Router();

routerExpenses.get("/test", async (req, res, next) => {
  try {
    let newExpenses = await Expenses.findAll({
      order: [["date", "ASC"]],
      attributes: {
        include: [
          [
            Sequelize.fn("to_char", Sequelize.col("date"), "DD-Mon-YYYY"),
            "date",
          ],
        ],
      },
    });
    res.status(200).json(newExpenses);
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

// Add expenses on DB
routerExpenses.post("/", async (req, res, next) => {
  try {
    const { date, description, amount } = req.body;
    let newExpenses = await Expenses.create({
      date,
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
      order: [["date", "ASC"]],
      attributes: {
        include: [
          [
            Sequelize.fn("to_char", Sequelize.col("date"), "DD-Mon-YYYY"),
            "date",
          ],
        ],
      },
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
      order: [["date", "ASC"]],
      attributes: {
        include: [
          [
            Sequelize.fn("to_char", Sequelize.col("date"), "DD-Mon-YYYY"),
            "date",
          ],
        ],
      },
    });
    res.status(200).json({ newExpenses });
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
    const { date, description, amount } = req.body;
    await expenses.update({ date, description, amount });
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
