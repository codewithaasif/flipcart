const Product = require('./model/Product.cjs')
const defultproduct = require('./constant/Product.cjs')



const Ddata = async() => {
   try{
      await Product.deleteMany({})
    await Product.insertMany(defultproduct)

    console.log('data has been imported successfully')
   }catch(error){
    console.log('errors............:',error.message)
   }
}

module.exports = Ddata;
