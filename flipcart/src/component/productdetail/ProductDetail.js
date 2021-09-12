import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductdetail } from '../../redux/actions/ProductActions'
import { Box, makeStyles, Table, Typography,TableBody,TableRow,TableCell ,TextField} from '@material-ui/core'
import clsx from 'clsx'


//component
import DetailAction from './DetailAction'


//style
const usestyle = makeStyles(theme =>({
    container: {
        background: '#f2f2f2',
        marginTop: 20
    },
    component: {
        margin: '0px 60px',
        backgroundColor: 'white',
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            display: 'block',
            margin: '0px 0px',
        }
    },
    leftpart: {
        minWidth: '40%',
        marginTop: 50,
        marginLeft: 10,
    },
    rightpart: {
        marginTop: 50,
        '& > *': {
            marginTop: '10px',
        },
        [theme.breakpoints.down('sm')]:{
            margin: '50px 10px',
        } 
    },
    smalltext: {
        fontSize: 14,
        '& span': {
            fontWeight: 'bold',
            fontSize: 15,
        },
        '& > *': {
            fontSize: 14,
            marginTop: 10
        },

    },
    graytext: {
        color: 'gray',
        verticalAlign:'baseline'
    },
    price: {
        fontSize: 28
    },
    offer: {
        width: "18px",
        aspectRatio: "auto 18 / 18",
        height: "18px",
        marginRight: 5,
    },
    blue: {
        color: 'blue',
        fontWeight: 100,
        fontSize: 14
    },
    reting: {
        width: '70px',
        height: '25px',
        background: 'green',
        borderRadius: '50%',
        textAlign:'center',
        marginRight:8
    }
}))

const ProductDetail = ({ match }) => {
    const classes = usestyle()

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const asured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const offer = 'https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90'
    const star = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=='
    const location = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=='
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    
    const product = useSelector((state) => state.getProductsDetail.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductdetail(match.params.id))
    }, [dispatch])


    return (
        <Box className={classes.container}>
            {product && Object.keys(product).length &&
                <Box className={classes.component}>
                    <Box className={classes.leftpart}>
                       <DetailAction  product={product}/>
                    </Box>
                    <Box className={classes.rightpart}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smalltext, classes.graytext)} style={{ display: 'flex' }}>
                            <Typography className={classes.reting}>
                                <span style={{color:"white"}}>3.9 </span>
                                <img src={star} />
                            </Typography>
                            <span style={{ textAlign: "center" }}>8 Ratings & 2 Reviews</span>
                            <span>
                                <img src={asured} style={{ width: 77, marginLeft: 7 }} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className={clsx(classes.graytext, classes.smalltext)}>₹<strike>{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388e3c' }}>₹{product.price.discount}&nbsp;off</span> &nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Typography style={{ fontWeight: 600 }}> Available offers</Typography>
                        <Box className={classes.smalltext}>
                            <Typography><img src={offer} className={classes.offer} /><span>Special Price</span> Get extra 15% off <span className={classes.blue}>T&C</span></Typography>
                            <Typography> <img src={offer} className={classes.offer} /><span>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span className={classes.blue}>T&C</span></Typography>
                            <Typography><img src={offer} className={classes.offer} /><span>Bank Offer</span> 20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank <span className={classes.blue}>T&C</span></Typography>
                            <Typography><img src={offer} className={classes.offer} /><span>Bank Offer</span>10% Off on Bank of Baroda Mastercard debit card first time transaction <span className={classes.blue}>T&C</span></Typography>
                            <Typography><a href='#' style={{ textDecoration: 'none' }}>+2 more offers</a></Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className={classes.graytext} style={{fontWeight:600}}>
                                         <img src={location} style={{width:25,marginRight:5}} />Deliver to </TableCell>
                                    <TableCell><TextField id="standard-basic" label="PinCode" /></TableCell>
                                </TableRow>
                                <TableRow>
                                   <TableCell className={classes.graytext}>Delever </TableCell> 
                                   <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40 </TableCell> 
                                </TableRow>
                                <TableRow>
                                   <TableCell className={classes.graytext}>Waranty </TableCell> 
                                   <TableCell className={classes.smalltext}> no Waranty</TableCell> 
                                </TableRow>
                                <TableRow>
                                   <TableCell className={classes.graytext}>Seller </TableCell> 
                                   <TableCell className={classes.smalltext}> 
                                       <span style={{color:'#2874f0'}}>SuperComnet</span>
                                       <Typography >GST invice Available</Typography>
                                       <Typography>10 Days Return Policy</Typography>
                                       <Typography style={{color:'blue'}}>View More Seller starting from <span style={{color:'green'}}>₹300</span></Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                   <TableCell colspan={2} ><img src={sellerURL} style={{width:400}} /></TableCell> 
                                </TableRow>
                                <TableRow>
                                   <TableCell className={classes.graytext}> description</TableCell> 
                                   <TableCell className={classes.smalltext}> {product.description}</TableCell> 
                                </TableRow>
                            </TableBody>
                        </Table>

                    </Box>
                </Box>
            }
        </Box>
    )
}
export default ProductDetail
