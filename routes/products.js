const express = require ('express');
const router = express.Router();
const productsController = require ('../controllers/productsController')

router.get('/',productsController.listar);
router.get('/detalle',productsController.detalle)



module.exports= router;
