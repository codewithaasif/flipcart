const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount: String, 
    tagline: String

})

const product = mongoose.model('product',userschema)
module.exports = product;
