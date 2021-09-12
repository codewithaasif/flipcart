const product = require('../model/Product.cjs')

const GetproductDetail = async (req,res)=> {
    try {
        const productdetail = await product.findOne({'id':req.params.id})
        res.json(productdetail)
        console.log('productdetail called...>',req.params.id)
    } catch (error) {
        console.log('error:',error.message)
    }
}

module.exports = GetproductDetail;



