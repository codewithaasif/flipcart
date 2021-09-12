import React from 'react'
//component
import { Box, Typography, makeStyles } from '@material-ui/core'
import { navData } from '../constant/Data'


const usestyle = makeStyles(theme =>({
    navbar: {
        background: '#ffffff',
        height: 110,
        marginTop:0,
    },
    component: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0px 50px', overflowX:'overlay',
        [theme.breakpoints.down('md')]:{
            margin:0,
        }          
    },
    text: {
        color: 'unset',
        fontSize: '12px',
        fontWeight: 600,
        fontStyle: ''
    },
    imgbox:{
        margin:'10px 20px 5px 0',
        cursor:'pointer'
    },
    img:{
        width: '64px',  
    }

}));
const Navbar = () => {
    const classes = usestyle()
    return (
        <Box className={classes.navbar} >
            <Box className={classes.component}>
                {
                    navData.map((data,key) => (
                        <Box className={classes.imgbox} key={key}>
                            <img src={data.url} alt=""  className={classes.img} />
                            <Typography className={classes.text}>{data.text}</Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Navbar
