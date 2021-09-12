import React from 'react'

//component
import {ImageURL} from '../constant/Data'
import {Box, makeStyles, Grid} from '@material-ui/core'


const usestyle = makeStyles({
    addbox:{
        padding:' 10px 4px',
        width:'98%'
    }
})

const Add = () => {
    const classes = usestyle()
    return (
        <Grid lg={12} md={12} sm={12} xs={12} container>
            {
                ImageURL.map((product,pro)=>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={product}   className={classes.addbox} key={pro} />
                </Grid>
                    )
            }
        </Grid>
    )
}

export default Add
