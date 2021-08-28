import {createStore} from 'vuex'
import products from './products.js'
import auth from './auth.js'

const store = createStore({
    modules:{
        products,
        auth
    }
})

export default store