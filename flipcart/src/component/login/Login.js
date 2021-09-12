import React, { useState } from 'react'

//component
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button} from '@material-ui/core';
import { Authenticatesignup , Authenticatelogin} from '../service/Api'

const usestyle = makeStyles({
    dilog: {
        width: '50vw',
        height: '85vh',
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '85vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 90%',
        backgroundColor: '#2847f0',
        width: '40%',
        padding: 40,
        '& > *': {
            color: 'white',
            textTransform: 'capitalize'
        }
    },
    login: {
        height: '85vh',
        padding: '20px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 15,
        }
    }
    ,
    text: {
        color: '#878787',
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'capitalize',
        '& > *': { color: 'blue' }
    },
    loginbtn: {
        background: '#fb641b',
        textTransform: 'none',
        color: '#ffffff',
        height: 48,
        "&:hover": {
            backgroundColor: '#f9570c',
        }
    },
    reqbtn: {
        background: '#fff',
        textTransform: 'none',
        color: '#2874f0',
        height: 48,
        boxShadow: '0 2px 4px 0 gray'
    },
    signtext: {
        color: '#2847f0',
        cursor: 'pointer',
        padding: 0,
        marginTop: 'auto',
        textAlign: 'center',
        fontSize: '14px'
    },
    err:{
        color:'red',
        fontSize:12,
        marginTop:1
    }
})


const initvalue = {
    login: {
        view: 'Login',
        title: 'First Login and Trace Order',
        subheading: 'Get access to your orders,wishlist and recommendations'
    },
    signup: {
        view: 'Signup',
        title: `Looks like you're new here!`,
        subheading: 'Sign up with your mobile number to get started'
    }
}

const inituservalue = {
    firstname:'',
    lastname:'',
    username:'',
    mobile:'',
    email:'',
    password:'',
}

const initloginvalue ={
    email:'',
    password:'',
}

const Login = ({ open, setopen, setname }) => {
    const classes = usestyle()
    const [account, setaccount] = useState(initvalue.login)
    const [signup, setsignup] = useState(inituservalue)
    const [UserLogin, setUserLogin] = useState(initloginvalue)
    const [err, seterr] = useState(false)
    const handlClose = () => {
        setopen(false)
        setaccount(initvalue.login)
        seterr(false)
    }

    const fliplogin = () => { setaccount(initvalue.login) }

    const flipsignup = () => { setaccount(initvalue.signup) }

    const signupUser = async()=>{
       let response = await Authenticatesignup(signup)
       if(!response) return;
       handlClose()
       setname(signup.username)
    }
    
    const getsignupdata =(e)=>{
        setsignup({...signup,[e.target.name]:e.target.value})
    }

    const getlogindata =(e)=>{
        setUserLogin({...UserLogin, [e.target.name]:e.target.value})
        seterr(false)
    }
    const logiUser = async() =>{
       let response= await Authenticatelogin(UserLogin)
       if(!response) {
        seterr(true)
        return;
       }else{
       handlClose()
       setname(response.data.username)
       }
    }

    return (
        <Box>
            <Dialog open={open} onClose={handlClose} aria-labelledby="form-dialog-title">
                <DialogContent className={classes.dilog}>
                    <Box style={{ display: 'flex' }}>

                        <Box className={classes.image}>
                            <Box>
                                <Typography variant='h5'>{account.view}</Typography>
                                <Typography style={{ marginTop: 20 ,fontSize:18}} variant='h6'>{account.title}</Typography>
                                <Typography style={{ marginTop: 40 }}>{account.subheading}</Typography>
                            </Box>
                        </Box>
                        {
                            account.view === 'Login' ?
                                <Box className={classes.login}>
                                    <TextField onChange={(e)=>getlogindata(e)} name='email' label='Enter Name/Mobile number' />
                                    <TextField onChange={(e)=>getlogindata(e)} name='password' label='Enter Password' />
                                    {
                                        err && 
                                        <Typography className={classes.err}>user e-mail or password not metch</Typography>
                                    }
                                    <Typography className={classes.text}>by continuing, you agree to flipcarts <span>terms of use </span> and <span>privacy policy</span>.</Typography>
                                    <Button variant='contained' className={classes.loginbtn} onClick={logiUser}>Login</Button>
                                    <Typography className={classes.text}>OR</Typography>
                                    <Button variant='contained' className={classes.reqbtn}>Request OTP</Button>
                                    <Typography onClick={() => flipsignup()} className={classes.signtext}>new to flipcart? create an account</Typography>
                                </Box> :
                                <Box className={classes.login} style={{ marginTop: 0 }}>
                                    <TextField onChange={(e)=>getsignupdata(e)} name='firstname' label='Enter First Name' />
                                    <TextField onChange={(e)=>getsignupdata(e)} name='lastname' label='Enter Last Name' />
                                    <TextField onChange={(e)=>getsignupdata(e)} name='username' label='Enter UserName' />
                                    <TextField onChange={(e)=>getsignupdata(e)} name='mobile' label='Enter Mobile Number' />
                                    <TextField onChange={(e)=>getsignupdata(e)} name='email' label='Enter E-mail' />
                                    <TextField onChange={(e)=>getsignupdata(e)} name='password' label='Enter Password' />
                                    <Button onClick={() => signupUser()} variant='contained' className={classes.reqbtn} style={{ background: 'blue', color: '#ffffff' }}>Signup</Button>
                                    <Typography onClick={() => fliplogin()} className={classes.signtext} style={{ marginTop: 'auto' }}>Exisiting User? Login</Typography>
                                </Box>
                        }

                    </Box>
                </DialogContent>
            </Dialog>
          
        </Box >
    )
}

export default Login
//   setopen={setopen} onClick={() => flipsignup()} onClick={() => fliplogin()}