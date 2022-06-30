const { Router } = require("express");
const { Op } = require("sequelize");
const { Expenses, Income } = require("../db.js");

const routerIncome = Router();
// Add income on DB
routerIncome.post("/", async (req, res, next) => {
  try {
    const { date, description, amount } = req.body;
    let newIncome = await Income.create({
      date,
      description,
      amount,
    });
    res.status(200).json(newIncome);
  } catch (error) {
    console.error("Error in creation:", error.message);
    res.status(404).json("error");
  }
});

// Get all income from DB
routerIncome.get("/", async (req, res, next) => {
  try {
    let newIncome = await Income.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).json(newIncome);
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

// Get 10 lastest income from DB
routerIncome.get("/latestIncome", async (req, res, next) => {
  try {
    let newIncome = await Income.findAll({
      limit: 10,
      order: [["updatedAt", "DESC"]],
    });
    console.log(newIncome);
    res.status(200).json({ newIncome });
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

// Get a single income by id
routerIncome.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let income = await Income.findByPk(id);
    console.log(income);
    res.status(200).json(income);
  } catch (error) {
    console.error("Error in fetching:", error.message);
    res.status(404).json("error");
  }
});

// Edit income on DB
routerIncome.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let income = await Income.findByPk(id);
    const { date, description, amount } = req.body;
    await income.update({ date, description, amount });
    await income.save();
    res.status(200).json(income);
  } catch (error) {
    console.error("Error in updating:", error.message);
    res.status(404).json("error");
  }
});

// Delete income on DB
routerIncome.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let income = await Income.findByPk(id);
    await income.destroy();
    res.status(200).json(income);
  } catch (error) {
    console.error("Error in deleting:", error.message);
    res.status(404).json("error");
  }
});
module.exports = routerIncome;
