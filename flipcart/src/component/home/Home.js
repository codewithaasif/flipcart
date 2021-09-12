import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//component
import { Box } from '@material-ui/core'
import Navbar from './Navbar'
import Banner from './Banner'
import Proslide from './Proslide'
import Add from './Add'
import Covid from './Covid'
import { Fashion } from "../../component/constant/Data"
import { getProducts } from "../../redux/actions/ProductActions"
const Home = () => {
    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    return (
        <div>
            <Navbar />
            <Banner />
            <Proslide time={true} title='Deals of the Day' products={products} />
            <Add />
            <Covid />
            {/* <Proslide time={false} title='Top Discount Offers' products={Fashion}/>
            <Proslide time={false} title='Best Price On Fashion' products={products}/>
            <Proslide time={false} title='Top Deals on Accessories'  products={Fashion}/>
            <Proslide time={false} title='Men s Footwear' products={products}/>
            <Proslide time={false} title='Top Picks on'  products={Fashion}/> */}



        </div>
    )
}

export default Home
