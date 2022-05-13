var express = require('express');
var router = express.Router();
const {detail, products,search} = require('../controllers/productsController')


router.get('/',products)
router.get('/detail/:id',detail)
router.get('/result',search)



module.exports = router;