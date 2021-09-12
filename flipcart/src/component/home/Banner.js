import React from 'react'
//component
import { makeStyles } from '@material-ui/core';
import Carousel from "react-material-ui-carousel"
import {bannerData} from "../../component/constant/Data"


const usestyle = makeStyles(theme =>({
    carousel:{
        height:290,
        width:'100%',
        margin:'17px 0px',
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180,
        }
    },
    image:{
        height:290,
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180,
        }
        
    },
}));
const Banner = () => {
    const crousel = {background:'#ffff',color:'black',marginLeft:0,marginRight:0,marginTop:-30,borderRadius:'1px',height:100,}
     const classess = usestyle()
    return (
        <div>
           <Carousel className={classess.carousel}
           animation="slide" navButtonsAlwaysVisible={true}
            navButtonsProps={{style:crousel}}
            
           >
                {
                    bannerData.map((image,key)=>(
                        <img src={image} alt=""  className={classess.image} key={key}/>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Banner
