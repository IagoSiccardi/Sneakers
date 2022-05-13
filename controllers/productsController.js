const req = require('express/lib/request')
const products = require('../data/products.json')



module.exports = {


    products:(req,res) => {
        res.render('./products/products',{
            products
        })
    },

    detail: (req,res) => {

        const {id} = req.params

        const product = products.find(product => product.id === +id)

        const number = product.price / 12
        
        const result = number.toFixed(3)

        res.render('./products/detail',{
            product,
            result,
            products
        })
        
    },

    search: (req,res) => {

        const {keyword} = req.query

        const productsFilter = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()))

        res.render('./products/result',{
            productsFilter,
            keyword,
            products
        })
    }
}