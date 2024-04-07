const { Router } = require("express");
const { validarjwt } = require("../middlewares");
const {
  getUserQuery,
  sensoresquery,
  logsErrores,
  ultimoControl,
  escribirControl
} = require("../controllers/mediciones");
const router = Router();

router.get("/queryUser", [validarjwt], getUserQuery);
router.get("/sensores", [], sensoresquery);
router.get("/logs", [], logsErrores);
router.get('/control/automatico', [],ultimoControl)
router.post('/control/manual', [],escribirControl)
module.exports = router;
