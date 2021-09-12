import { Box, Button, Card, makeStyles, Typography } from '@material-ui/core'
import GroupButtons from './GroupButtons'



const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const usestyle = makeStyles(theme => ({
    maincomponent: {
        borderRadius: '0%',
         display: 'flex',
        borderTop:'1px solid #f0f0f0',
        padding:'15px',
    },
    image: {
        width:120,
        height:100,
    },
    rightpart:{
        minWidth:'25%',
        [theme.breakpoints.down('sm')]:{
            minWidth:'35%',
        }
    },
    leftpart:{
        '& > *':{
            marginTop:10,
        }
    },
    title:{
        fontWeight:600,
    },
    graytext:{
        color:'gray',
    }


}));
const CartItem = ({ item , removefromcart}) => {
    const classes = usestyle()
    return (
            <Card className={classes.maincomponent}>
                <Box className={classes.rightpart}>
                    <img src={item.url} className={classes.image} />
                    <GroupButtons />
                </Box>
                <Box className={classes.leftpart}>
                    <Typography className={classes.title}>{item.title.longTitle}</Typography>
                    <Typography>
                        <span className={classes.graytext}>seller:</span> 
                        <span>SuperComNet</span>
                        <img src={fassured} style={{width:50,marginLeft:10}}/>
                        </Typography>
                    <Typography>
                        <span style={{fontWeight:600}}> ₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                        <strike className={classes.graytext}> ₹<span>{item.price.mrp}</span></strike> &nbsp;&nbsp;&nbsp;
                        <span style={{color:'green'}}>{item.price.discount} off</span>
                    </Typography>
                    <Button onClick={() => removefromcart (item.id)} style={{marginTop:40}}>remove</Button>
                </Box>
            </Card>

    )
}

export default CartItem
