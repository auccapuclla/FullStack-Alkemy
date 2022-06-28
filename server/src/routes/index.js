const { Router } = require("express");
const routerExpenses = require("./expenses");
const routerIncome = require("./income");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/expenses", routerExpenses);
router.use("/income", routerIncome);

module.exports = router;
