const Userdata = require('../model/Userschema.cjs')


const Usersignup = async (req, res) => {
    try {
        const email = req.body.email
        const exist = await Userdata.findOne({ email: email })
        if (exist) {
            return res.status(401).json('User alredy exits')
        }
        const user = req.body;
        const newUser = new Userdata(user)
        await newUser.save()

        res.status(200).json('User is successfully registered')
    } catch (error) {
        console.log('errors in signup:', error.message)
    }
    return `hellow`
}

const Userlogin = async (req,res) => {
   try{
    const name = req.body.username
    const email = req.body.email
    const password= req.body.password
    const user = await Userdata.findOne({email:email, password:password})
    if(user){
        const [userdata] = await Userdata.find({email}).select('username')
        res.status(200).json(userdata)
    }else{
        return res.status(401).json('invalid login')
    }
   } catch(error){
       console.log('errors in login:',error.message)
   }
}


module.exports = {Userlogin, Usersignup }







