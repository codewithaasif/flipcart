import { Box, Typography, makeStyles, Card, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { Removecart } from '../../redux/actions/Cartaction'
import { useHistory } from 'react-router-dom'
import RightItems from './RightItems'

import { PayUsingPaytm } from '../service/Api'
import { post } from '../../utils/Paytm'



const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

const usestyle = makeStyles(theme => ({
    container: {
        background: 'white',
        width: '70%',
        height: '65vh',
        margin: '80px 160px',
    },
    imgcomponent: {
        textAlign: 'center',
        paddingTop: 30,
    },
    image: {
        width: 250,
    },
    button: {
        fontWeight: 600,
        marginTop: 10,
        background: '#2874f0',
        width: '25%',
        '&:hover': {
            background: 'green'
        }
    },
    place: {
        borderTop: '1px solid #f0f0f0',
        background: 'white',
        padding: 15,
        backgroundColor: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 /10%)'
    },
    placebutton: {
        background: '#fb641b',
        color: '#fff',
        width: '30%',
        display: 'flex',
        marginLeft: 'auto',
        '&:hover': {
            background: 'blue'
        }
    },
    main:{
        display: 'flex',
        margin: '80px 100px',
        [theme.breakpoints.down('sm')]:{
            display:'block',
            margin: '0px 0px',
        }
    },
    leftitem:{
        minWidth: '66%',
        marginRight: 20,
        marginTop: 20,
        [theme.breakpoints.down('sm')]:{
        minWidth: '100%',
        marginRight: 0,
        }
    }
}));

const Cart = () => {
    const classes = usestyle();
    const { cartItems } = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    const history = useHistory()

    const removefromcart = (id) => {
        dispatch(Removecart(id))
    }

    const Shopnow = () => {
        history.push('/')
    }


    const BuyNow = async () => {
        const response = await PayUsingPaytm({ amount: 500, email: 'aasif@hostivers.com' })
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
        console.log('place order')
    }

    return (
        <>

            {
                cartItems.length ?
                    <Box className={classes.main}>
                        <Box className={classes.leftitem}>
                            <Box>
                                <Typography style={{ background: 'white', padding: '10px 0 10px 20px', fontWeight: 600 }}>My Cart ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item =>
                                    <CartItem item={item} removefromcart={removefromcart} />
                                )
                            }
                            <Box className={classes.place}>
                                <Button onClick={BuyNow} className={classes.placebutton}>Place Order</Button>
                            </Box>
                        </Box>
                        <RightItems cartItems={cartItems} />
                    </Box>
                    :
                    <Box>
                        <Card className={classes.container}>
                            <Typography style={{ padding: '10px' }}>My Cart</Typography>
                            <Box className={classes.imgcomponent}>
                                <img src={emptycarturl} className={classes.image} />
                                <Typography style={{ fontWeight: 600, marginTop: 10, fontSize: 18 }}>Your Cart is empty!</Typography>
                                <Typography style={{ marginTop: 10, fontSize: 12 }}>Add items to it now.</Typography>
                                <Button variant="contained" className={classes.button} onClick={Shopnow} >Shop now</Button>
                            </Box>
                        </Card>
                    </Box>
            }
        </>
    )
}

export default Cart

