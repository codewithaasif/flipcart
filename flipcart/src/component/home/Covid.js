import React from 'react'
import {makeStyles} from '@material-ui/core'


const usestyle = makeStyles(theme =>({
img:{
    width:'100%',
    height:280,
    objectFit:'cover',
    [theme.breakpoints.down('sm')]:{
        height:150
    }

}
}));

const Covid = () => { 
    const classes = usestyle()
const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <div  style={{padding:'0 6px'}}>
           <img src={coronaURL } alt="" className={classes.img} />

        </div>
    )
}

export default Covid
