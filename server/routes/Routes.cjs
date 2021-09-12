
const express = require('express')
const route = express.Router()

//component
const {Usersignup, Userlogin} = require('../controller/usercontroller.cjs')
const Getproducts = require('../controller/Product_controler.cjs')
const GetproductDetail = require('../controller/GetproductDetail.cjs')
const {addPaymentGateway,paymentResponse} = require('../controller/Payment_controler.cjs')


route.post('/signup', Usersignup)
route.post('/login',Userlogin)
route.get('/products',Getproducts)
route.get('/product/:id', GetproductDetail)
route.post('/payment',addPaymentGateway);
route.post('/callback',paymentResponse)



module.exports = route