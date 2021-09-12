const express  = require ('express')
const dotenv  = require('dotenv')


const Ddata = require('./Defult.cjs')
const Product = require('./model/Product.cjs')
const bodyparser = require('body-parser')
const cors = require('cors')


// component 
 const connnect = require('./database/db.cjs')
const route = require('./routes/Routes.cjs')

const app = express()



dotenv.config()

app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use('/', route)


username  = process.env.db_username
password = process.env.db_password 
connnect(username,password)




const port = process.env.port || 5000;

app.listen(port, ()=>console.log(`the server is started on port ${port}`))
//save data in database

 Ddata()






 
 
 
    


