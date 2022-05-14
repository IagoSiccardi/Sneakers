const products = require('../data/products.json')
const fs = require ('fs')
const path = require('path')

module.exports = {


    products: (req,res) => {

        const products =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '..','data','products.json')))
        

        res.render('./products/products',{
            products
        })
    },

    edit:(req,res) => {
        
        const {id} = req.params

        const product = products.find(product => product.id === +id)

        res.render('./products/edit',{
            product,
            products
        })
    },

    update:(req,res) => {

        const {id} = req.params
        const {name,price,description} = req.body

        const productsEdit = products.map(product => {

            if (product.id === +id) {

                let productEdit = {
    
                    ...product,
                    name: name.trim(),
                    price : +price,
                    description: description.trim()
                }

                return productEdit
            }

            return product

        })

        fs.writeFileSync(path.resolve(__dirname,'..','data','products.json'),JSON.stringify(productsEdit,null,3),'utf-8')

        res.redirect('/products')
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