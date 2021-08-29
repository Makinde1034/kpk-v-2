const BASE_URL = process.env.VUE_APP_BASE_URL
import axios from 'axios'
import storage from './storage.js'


const PRODUCT_URL = `${BASE_URL}/product`
const USER_URL = `${BASE_URL}/user`
const CART_URL = `${BASE_URL}/cart`


export default {
    getCustomerHeader(){
        let header = {
            Authorization: "bearer " + storage.getToken()
        }
        return header
    },
    getProducts(){
        return axios.get(`${PRODUCT_URL}/get-all-product`);
    },
    signUp(user){
        return axios({url : `${USER_URL}/signup-customer`,data:user, method:'POST'});
    },
    signIn(user){
        return  axios({url: `${USER_URL}/login`,data:user, method:"POST"});
    },
    addToCart(payload){
        return axios.post(`${CART_URL}/add-to-cart`,payload,{
            headers:this.getCustomerHeader()
        })
    },
    getCart(){
        return axios.get(`${CART_URL}/get-cart`,{
            headers: this.getCustomerHeader()
        })
    },
    deleteFromCart(payload){
        return axios.post(`${CART_URL}/delete-from-cart`,payload,{
            headers:this.getCustomerHeader()
        });
    },

    removeFromCart(payload){
        return axios.post(`${CART_URL}/remove-from-cart`,payload,{
            headers:this.getCustomerHeader()
        })
    }
}