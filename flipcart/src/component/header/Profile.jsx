import React, { useState } from 'react'


import { Box, Typography, MenuItem, Menu, makeStyles } from '@material-ui/core'

//icons
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const usestyle = makeStyles({
    menu: {
        marginTop: '30px'
    },
    option: {
        color: 'blue'
    }
})

const Profile = ({ name, setname }) => {
    const classes = usestyle()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Logout = () => {
         setname(null);
    };
   
    return (
        <>
            <Box style={{ display: 'flex' }} onClick={handleClick}>
               <PersonIcon />
                <Typography style={{ marginTop: 4, fontWeight: 600, fontSize: 17 }}>
                    {name}
                </Typography>
            </Box>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <MenuItem className={classes.option} >
                <AccountCircleIcon />
                    <Typography style={{marginLeft:4}}>Profile</Typography>
                </MenuItem>
                <MenuItem className={classes.option}  onClick={Logout}>
                    <PowerSettingsNewIcon />
                    <Typography style={{marginLeft:4}}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile

