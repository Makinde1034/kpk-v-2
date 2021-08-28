const BASE_URL = process.env.VUE_APP_BASE_URL
import axios from 'axios'


const PRODUCT_URL = `${BASE_URL}/product`
const USER_URL = `${BASE_URL}/user`
// const CART_URL = `${BASE_URL}/cart`


export default {
    getProducts(){
        return axios.get(`${PRODUCT_URL}/get-all-product`);
    },
    signUp(user){
        return axios({url : `${USER_URL}/signup-customer`,data:user, method:'POST'});
    },
}