import { Box, Typography, makeStyles } from '@material-ui/core'
import {useState ,useEffect} from 'react'


const usestyle = makeStyles(theme => ({
    component: {
        backgroundColor: '#fff',
        marginTop: 19,
        padding: '10px 20px',
        width:'60%'
    },
    container: {
        marginTop: 30,
        '& > *': {
            marginTop: 15
        }
    },
    graytext: {
        color: 'gray',
    },
    bold: {
        fontWeight: 600,
        color:'brown'
    },
    total: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 600,
        borderTop: '1px solid #f0f0f0',
        paddingTop: 10
    },
    title: {
        marginTop: 20,
        borderTop: '1px solid #f0f0f0',
        paddingTop: 10,
        color: 'green',
        fontWeight: 600,
        [theme.breakpoints.down('sm')]:{
            width:'150%',
        }
    },
    section: {
        display: 'flex'
    },
    leftpart: {
        marginTop: 25,
        '& > *': {
            marginTop: 12
        }
    }
}));

const RightItems = ({cartItems}) => {
        const [price, setprice] = useState(0)
        const [discount, setdiscount] = useState(0)
        const [Total, setTotal] = useState(0)
        useEffect(()=>{
            Totalamount()
        },[cartItems])

      const Totalamount =()=>{
          let prices = 0, discounts = 0, totals = 0;
            cartItems.map(item =>{
                prices += item.price.mrp
                discounts += (item.price.mrp - item.price.cost)
                totals += item.price.cost
            });
            setprice(prices)
            setdiscount(discounts)
            setTotal(totals)
      }


    const classes = usestyle();

    return (
        <Box className={classes.component}>
            <Typography className={classes.graytext}>PRICE DETAILS</Typography>

            <Box className={classes.section}>
                <Box>
                    <Box className={classes.container}>
                        <Typography className={classes.bold}>Price({cartItems.length} item)</Typography>
                        <Typography className={classes.bold}>Discount</Typography>
                        <Typography className={classes.bold}>Delivery Charges</Typography>
                    </Box>
                    <Typography className={classes.total}>Total Amount</Typography>
                    <Typography className={classes.title} >You will save ₹{discount} on this order</Typography>
                </Box>

                <Box >
                    <Box className={classes.container}>
                        <Typography className={classes.bold} style={{color:'black'}}>₹{price}</Typography>
                        <Typography className={classes.bold} style={{color:'green'}}>-₹{discount}</Typography>
                        <Typography className={classes.bold} style={{color:'green'}}>FREE</Typography>
                    </Box>
                    <Typography className={classes.total}>₹{Total}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RightItems
