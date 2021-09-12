const mongoose = require('mongoose')

const connnect = async(username,password)=>{
    
    const db = `mongodb+srv://${username}:${password}@cluster0.od8mw.mongodb.net/learning?retryWrites=true&w=majority`
        // const db = `mongodb+srv://${username}:${password}@cluster0.5bvxc.mongodb.net/study?retryWrites=true&w=majority`
     
    try{
     await mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true})
     console.log('database connnection successfully')
    }catch(error){
        console.log('error in database:' ,error.message)
    }
 }
module.exports = connnect;
