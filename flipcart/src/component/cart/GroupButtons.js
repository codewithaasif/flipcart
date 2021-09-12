import {Box, Button, ButtonGroup} from '@material-ui/core'
import {useState} from 'react'



const GroupButtons = () => {
    const [count, setcount] = useState(1)

    const Decres = () =>{
        setcount(count - 1)
    }
    const Incress = () =>{
        setcount(count + 1)
    }
    return (
       <Box style={{marginTop:20}}>
           <ButtonGroup>
               <Button onClick={Decres} disabled ={count == 1}  >-</Button>
               <Button>{count}</Button>
               <Button onClick={Incress}>+</Button>
           </ButtonGroup>
       </Box>
    )
}

export default GroupButtons
