import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import Profile from './Profile'
import Login from '../login/Login'
import { useState, useContext } from 'react'
import { logincontext } from '../context/Contextprovider'
import PersonIcon from '@material-ui/icons/Person';



const usestyle = makeStyles(theme => ({
    login:{
        cursor:'pointer',
        display:'flex',
        textAlign:'center',
        alignItems:'right',
        margin:' 0 0 0 auto',
        right:0
    }
}));


const Cartbtn = () => {
    const classes = usestyle()

    const [open, setopen] = useState(false)
    const { name, setname } = useContext(logincontext)


    const opendilog = () => {
        setopen(true)
    }


    return (
        <Box>
             {
                name ? <Profile name={name} setname={setname} />
                    :<PersonIcon onClick={opendilog} className={classes.login} />
                     
            }
            <Login open={open} setopen={setopen} setname={setname} />
            
        </Box>
    )
}

export default Cartbtn
