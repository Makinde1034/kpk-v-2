import {createStore} from 'vuex'
import products from './products.js'
import auth from './auth.js'
import cart from './cart.js'

const store = createStore({
    modules:{
        products,
        auth,
        cart
    }
})

export default store