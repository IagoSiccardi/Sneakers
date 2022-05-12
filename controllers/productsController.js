const req = require('express/lib/request')
const products = require('../data/products.json')



module.exports = {
    detail: (req,res) => {

        const {id} = req.params

        const product = products.find(product => product.id === +id)

        const number = product.price / 12
        
        const result = number.toFixed(3)

        res.render('detail',{
            product,
            result,
            products
        })
    }
}