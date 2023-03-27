const { Router } = require('express');
const { validarjwt } = require('../middlewares');
const { getUserQuery, sensoresquery } = require('../controllers/mediciones');
const router = Router();

router.get('/queryUser', [validarjwt], getUserQuery);
router.get("/sensores", [],sensoresquery)
module.exports = router;