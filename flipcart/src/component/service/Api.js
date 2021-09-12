import axios from 'axios'

const url = 'http://localhost:5000'

export const Authenticatesignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.warn('error: while calling signup api')
    }
}

export const Authenticatelogin = async (user) =>{
    try{
       return await axios.post(`${url}/login`,user)
    }catch(error){
        console.log('error:',error.message)
    }
}

export const PayUsingPaytm = async (data) =>{
    try{
        const response = await axios.post(`${url}/payment`, data)
        return response.data;
    }catch(error){
        console.log('error in pytm api:',error.message)
    }
}
