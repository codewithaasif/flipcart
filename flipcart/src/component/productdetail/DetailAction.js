import {Box, Button,makeStyles} from '@material-ui/core'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'

//component
import addTocart from '../../redux/actions/Cartaction'
import {PayUsingPaytm} from '../service/Api'
import {post} from '../../utils/Paytm'


const usestyle = makeStyles({
    leftcontainer:{
        padding:'10px 0 0 30px',
        width:'100%',
    },
    image:{
        padding:'10px',
        border:'1px solid #f0f0f0',
        width:'90%',
        height:'50%'
    },
    buttons:{
        width:'100%'
    },
    addtocart:{
        color:'#fff',
        background:'#ff9f00',
        width:'44%',
        marginRight:'10px',
        "&:hover": {
            backgroundColor: "green !important"
          }
    },
    buynow:{
        color:'#fff',
        background:'#fb641b',
        width:'44%',
        "&:hover": {
            backgroundColor: "blue !important"
          }
    }
})


const DetailAction = ({product}) => {
    const classes = usestyle() 
    const dispatch = useDispatch()
    const history = useHistory()

    const cartItems = useSelector(state => state)

    const additemTocart = () =>{
         dispatch(addTocart(product.id))
         history.push('/cart')
    }

    const BuyNow = async()=>{
          const response = await PayUsingPaytm({amount: 500, email:'aasif@hostivers.com'})
            let information = {
                action:'https://securegw-stage.paytm.in/order/process',
                params: response
            }
          post(information);
         console.log('buy now')
        }


    return (
        <Box className={classes.leftcontainer}>
            <Box>
                <img src={product.detailUrl} className={classes.image}/>
            </Box>
           <Box className={classes.buttons}>
           <Button variant='contained' className={classes.addtocart} onClick={additemTocart}><ShoppingCartIcon /> add to cart</Button>
            <Button onClick={BuyNow} variant='contained' className={classes.buynow}> <FlashOnIcon />buy now</Button>
           </Box>
        </Box>
    )
}

export default DetailAction
