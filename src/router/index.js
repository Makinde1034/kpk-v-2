import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/home.vue'
import SignIn from '../views/sign_in.vue'
import SignUp from '../views/sign_up.vue'
import Cart from '../views/cart.vue'
import pageNotFound from '../views/404.vue'
import Details from '../views/details.vue'

const routes = [
    {
        name:"home",
        component:Home,
        path:"/"
    },
    {
        name:"signIn",
        component:SignIn,
        path:"/signin"
    },
    {
        name:"signUp",
        component:SignUp,
        path:"/signup"
    },
    {
        name:"Cart",
        component:Cart,
        path:"/cart"
    },
    {
        name:"404",
        component:pageNotFound,
        path:"/*"
    },
    {
        name:"details",
        component:Details,
        path:"/details/:id"
    }
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router