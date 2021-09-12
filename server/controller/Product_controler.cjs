const product = require('../model/Product.cjs')

const Getproducts = async (req,res) => {
   try{
        const products = await product.find({})
        res.json(products)
        console.warn('product result......>')

  }catch(error){
      console.log('error:',error.message)
  }
  return `hellow`
}
module.exports = Getproducts
