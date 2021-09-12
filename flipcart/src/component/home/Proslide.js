import React from 'react'
//component
// import { products } from "../../component/constant/Data"
import { Box, Typography, makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const usestyle = makeStyles(theme => ({
    image: {
        height: 150,
    },
    component: {
        background: '#ffffff',
        height: '360px',
        width: '80%',
        margin: '10px 0px',
        boxShadow: '0px 0px 3px 1px gray',
        [theme.breakpoints.down('md')]:{
            width:'100%',
        }
    },
    carousel: {
        height: 300,
        width: '100%',
    },
    dealbox: {
        borderBottom: '0.5px solid #e5e5e5',
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            marginLeft: 10
        }
    },
    deal: {
        fontSize: 20,
        fontWeight: 600,
        padding: '15px 15px',
        [theme.breakpoints.down('xs')]:{
            fontSize: 15,
            padding: '5px 5px',
        }
    },
    time: { color: '#7f7f7f', fontSize: 20 },
    viewbtn: {
        marginLeft: 'auto',
        marginRight: '50px',
        background: '#2874f0',
        color: '#ffff'
    },
    sliding: {
        textAlign: 'center',
    },
    add:{
        width: 'auto',
        padding: 3,
        background: '#ffff',
        margin: '0 0 0 13px',
        [theme.breakpoints.down('md')]:{
            display:'none',
        }
    },
    addimg:{
        width: '240px', height: '350px'
    },
    main:{
        display:'flex'
    }

}));

const Proslide = ({ time, title, products }) => {
    const classes = usestyle()
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return 'sorry! the Deal Time is Over;'
        } else {
            return <span>{hours}:{minutes}:{seconds}  Left </span>
        }
    };

    return (
        <Box  className={classes.main}>
            <Box className={classes.component}>
                <Box className={classes.dealbox}>
                    <Typography className={classes.deal}> {title} </Typography>
                    {
                        time ? <>
                            <img src={timerURL} alt="" style={{ width: '22px' }} />
                            <Box className={classes.time} ><Countdown date={Date.now() + 5.04e+7} renderer={renderer} /></Box>
                        </> : ''
                    }
                    <Button variant='contained' color='primary' className={classes.viewbtn}>View all</Button>
                </Box>
                <Carousel
                    className={classes.carousel}
                    responsive={responsive}
                    infinite={true}
                    draggable={false}
                    swipeable={true}
                    autoPlay={true}
                    centerMode={true}
                    autoPlaySpeed={10000}
                    keyBoardControl={true}
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    showDots={false}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container"
                >
                    {
                        products.map((product, pro) =>
                            <Link to={`product/${product.id}`}>
                                <Box className={classes.sliding} key={pro}>
                                    <img src={product.url} alt="" className={classes.image} />
                                    <Box style={{ marginTop: 10 }}>
                                        <Typography style={{ marginTop: 3, fontWeight: 600, fontSize: 17 }}>{product.title.shortTitle}</Typography>
                                        <Typography style={{ marginTop: 3, color: 'green', fontSize: 14 }}>{product.discount}</Typography>
                                        <Typography style={{ marginTop: 3, opacity: '0.5', fontSize: 15 }}>{product.tagline}</Typography>
                                    </Box>
                                </Box>
                            </Link>
                        )
                    }

                </Carousel>
            </Box>
            <Box className={classes.add}>
                <img src={adURL} alt=""  className={classes.addimg}/>
            </Box>
        </Box>
    )
}

export default Proslide
