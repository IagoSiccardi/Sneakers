var express = require('express');
var router = express.Router();
var path = require ('path')
var multer = require('multer')
const {detail, products,search, edit, update, create, store, remove} = require('../controllers/productsController')


const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,path.resolve(__dirname,'../public/images'))
    },

    filename: (req,file,cb) => {

        let newFileName = 'img-' + Date.now() + path.extname(file.originalname)

        cb(null,newFileName)
    }
})

const upload = multer({storage})

router.get('/',products)
router.get('/detail/:id',detail)
router.get('/result',search)

router.get('/create', create)
router.post('/create',upload.single('imageProduct'), store)

router.get('/edit/:id', edit)
router.put('/update/:id',upload.single('imageProduct'), update)

router.delete('/delete/:id', remove)





module.exports = router;