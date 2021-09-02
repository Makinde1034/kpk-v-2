import {createStore} from 'vuex'
import products from './products.js'
import auth from './auth.js'
import cart from './cart.js'
import mobile from './mobile.js'

const store = createStore({
    modules:{
        products,
        auth,
        cart,
        mobile
    }
})

export default store