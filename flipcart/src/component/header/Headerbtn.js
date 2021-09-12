import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
//component
import { Box, Button, Typography, makeStyles, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Login from '../login/Login'
import Profile from './Profile'
import { logincontext } from '../context/Contextprovider'



const usestyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        margin: '0 auto 0 auto',
        '& > *': {
            marginRight: '40px',
            fontSize: 15,
            fontWeight: 600,
            alignItems: 'center',
            cursor: 'pointer',
            [theme.breakpoints.down('xs')]: {
                marginRight: 'auto',
            },
        },
        [theme.breakpoints.down('sm')]:{
            width:'180px',
            flexDirection:'column',
            margin: '20px 0 0 20px',
        }

    },
    login: {
        background: '#ffffff',
        borderRadius: 2,
        color: "#2874f0",
        padding: ' 3px 35px',
        textTransform: 'none',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]:{
            background: '#2874f0',
            color: "#ffff",
            padding: ' 3px 55px',
        }
    },
    cartbox: {
        display: 'flex',
        '& > *': {
            marginLeft: 10,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none', 
            color: 'white',
            [theme.breakpoints.down('sm')]:{
                marginTop: 30,
                color:'blue'
            }
        },
    }, 
    more:{
        marginTop: 6,
        fontSize: 16,
        [theme.breakpoints.down('sm')]:{
            marginTop: 30,
            marginLeft: 30,
            color:'blue'
        }
    }   

}));
const Headerbtn = ({ setdrawer }) => {
    const [open, setopen] = useState(false)
    const { name, setname } = useContext(logincontext)
    const classes = usestyle()

    const { cartItems } = useSelector(state => state.cartItems)
    //dilog open  function
    const opendilog = () => {
        setopen(true)
    }

    return (
        <Box className={classes.component} onClick={() => setdrawer(false)}>
            {
                name ? <Profile name={name} setname={setname} />
                    :<Button onClick={opendilog} variant="contained" className={classes.login}>Login</Button>
                     
            }
            <Typography className={classes.more}  >More</Typography>
            <Link to="/cart"  className={classes.cartbox}>
                <Badge badgeContent={cartItems.length} color="secondary" >
                    <ShoppingCartIcon />
                </Badge>
                <Typography>Cart</Typography>
            </Link>
            <Login open={open} setopen={setopen} setname={setname} />
        </Box>
    )
}

export default Headerbtn


