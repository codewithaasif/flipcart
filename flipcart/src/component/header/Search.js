import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//mui
import { InputBase, makeStyles, Box, List, ListItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

//com
import { getProductdetail } from '../../redux/actions/ProductActions'


const usestyle = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '30%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            marginRight: 30,
        }
    },
    searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'blue',
        cursor: 'pointer'
    },
    inputRoot: {
        fontSize: 13.3,
        width: '100%'
    },
    inputInput: {
        paddingLeft: 20,
    },
    list: {
        position: 'absolute',
        backgroundColor: 'white',
        marginTop: 35,
        width: '50%',
        zIndex: 10,
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        }
    },
    listitem: {
        color: 'black',
    }
}))

const Search = () => {

    const [text, settext] = useState('')
    const [open, setopen] = useState(true)

    const classes = usestyle()

    const dispetch = useDispatch()


    const { products } = useSelector(state => state.getProducts)

    const getText = (text) => {
        settext(text)
        setopen(false)
    }
    const closList = (id) => {
        setopen(true);
        dispetch(getProductdetail(id));
        settext('');
        console.log('result:- ', id);
    }
    return (
        <Box className={classes.search}>
            <InputBase
                placeholder="Search for products, brands and more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <Box className={classes.searchIcon}>
                <SearchIcon />
            </Box>
            {
                text &&
                <List className={classes.list} hidden={open}>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(item =>
                            <ListItem className={classes.listitem}>
                                <Link to={`/product/${item.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                                    onClick={() => closList(item.id)}>
                                    {item.title.longTitle}
                                </Link>
                            </ListItem>
                        )
                    }
                </List>
            }
        </Box>
    )
}

export default Search
