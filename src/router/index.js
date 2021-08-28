import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/home.vue'
import SignIn from '../views/sign_in.vue'
import SignUp from '../views/sign_up.vue'

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
    }
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router