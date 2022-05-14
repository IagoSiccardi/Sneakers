var express = require('express');
var router = express.Router();
const {detail, products,search, edit, update} = require('../controllers/productsController')


router.get('/',products)
router.get('/detail/:id',detail)
router.get('/result',search)

router.get('/edit/:id', edit)
router.put('/update/:id', update)



module.exports = router;