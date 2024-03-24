const { Router } = require("express");
const { validarjwt } = require("../middlewares");
const {
  getUserQuery,
  sensoresquery,
  logsErrores,
} = require("../controllers/mediciones");
const router = Router();

router.get("/queryUser", [validarjwt], getUserQuery);
router.get("/sensores", [], sensoresquery);
router.get("/logs", [], logsErrores);
module.exports = router;
