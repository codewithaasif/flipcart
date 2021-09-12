import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//component
import Search from './Search';
import Headerbtn from './Headerbtn';
import Cartbtn from './Cartbtn';


import { IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
//mui
import { AppBar, Toolbar, makeStyles, Typography, Box, withStyles } from '@material-ui/core';
const usestyle = makeStyles(theme => ({
    header: {
        background: "#2874f0",
        height: 55,
        width: '100%',
        boxShadow: 'none',
        // position: 'fixed',
        top: 0,
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0%',
            width: '100%'
        }
    },
    logo: {
        width: 75
    },
    suburl: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    explor: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0%'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0%'
        }
    },
    subheading: {
        fontStyle: 'italic',
        fontSize: 10
    },
    plus: {
        fontStyle: 'italic',
        fontSize: 10
    },
    menubtn: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    headerbtn: {
        marginLeft: 60,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            display:'none',
        }
    },
    crtBtncss:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display:'block',
        }
    }
}));

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar)

const Header = () => {
    const [drawer, setdrawer] = useState(false)
    const classess = usestyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const handelClose = () => {
        setdrawer(false)
    }
    
    const handelOpen = () => {
        setdrawer(true)
    }


    return (
        <Box>
            <AppBar position="static" className={classess.header}>
                <ToolBar>
                    <IconButton color='inherit' className={classess.menubtn} onClick={handelOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={drawer} onClose={handelClose}>
                        <Headerbtn setdrawer={setdrawer}/>
                    </Drawer>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }} className={classess.component}>
                        <img src={logoURL} alt="" className={classess.logo} />
                        <Box className={classess.explor}>
                            <Typography className={classess.subheading}>Explore <Box component='span' style={{ color: '#ffe500' }}> Plus </Box></Typography>
                            <img src={subURL} alt="" className={classess.suburl} />
                        </Box>
                    </Link>
                    <Search />
                    <Box className={classess.headerbtn}>
                        <Headerbtn setdrawer={setdrawer} />
                    </Box>
                    <Box className={classess.crtBtncss}>
                    <Cartbtn />
                    </Box>
                    
                </ToolBar>
            </AppBar>
        </Box>

    )
}

export default Header
