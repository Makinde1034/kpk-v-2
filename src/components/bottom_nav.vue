<template>
  <div>
        <nav class="nav">
            
            <div class="nav__logo">
                <div class="menu">
                    <div class="line"></div>
                    <div class="line middle-line"></div>
                    <div class="line"></div>
                </div>
                <router-link class="logo" to="/">KPK</router-link>
                <img src="../assets/trolley.d9c304ca.svg" alt="">
            </div>

            <div class="nav__search">
                <form action="">
                    <input placeholder="search products, brands and categories" type="text">
                    <button>
                        <img src="../assets/search.fd966c61.svg" alt="serach">
                    </button>
                </form>
            </div>
            <p @click="logUserOut" v-if="token" class="logout">logout</p>
            <router-link v-if="!token" to="/signup">Sign up</router-link>
            <router-link v-if="!token" to="/signin">Log in</router-link>
            <p v-if="token">Hi {{userDetails.first_name}}</p>
            <router-link to="cart">
                <div @click="openCart" class="nav__cart">
                    <p>Cart</p>
                    <div  class="cart__counter">
                        <img src="../assets/trolley.d9c304ca.svg" alt="">
                        <div class="circle">
                            <p>{{cartItems.length}}</p>
                        </div>
                    </div>
                </div>  
            </router-link>
            
      </nav>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import storage from '../utils/storage.js'

export default {
    
    methods:{
        ...mapActions('auth',['logOut']),
        ...mapActions('products',['getProducts']),
        ...mapActions('cart',['getCart']),

        logUserOut(){
            this.logOut()
            this.getProducts()
        }
        
    },
    computed:{
        ...mapState({
            token : (state) => state.auth.token,
            cartItems : (state) => state.cart.cartItems
        }),
        userDetails(){
            return storage.getUserDetails()
        }
    
    },
    created(){
        this.getCart()
    }
}
</script>

<style scoped>
.nav{
    height: 60px;
    background: #102A55;
    padding-left: 150px;
    padding-right: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.nav__logo{
    display: flex;
    align-items: center;
}

.logo{
    font-size: 25px;
}

.menu{
    margin-right: 10px;
    display: none;
}

.line{
    height: 3px;
    width: 25px;
    background: white;
    border-radius: 3px;
}

.middle-line{
    margin-top: 5px;
    margin-bottom: 5px;
}

.nav__logo h3{
    color: white;
}

.nav__search form{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nav__search form input{
    width: 600px;
    height: 40px;
    padding-left: 20px;
     border-top-left-radius: 5px;
    border-bottom-left-radius: 5px; 
    border: none;
    outline: none;
}

.nav__search button{
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav__search button img{
    height: 20px;
}
.login{
    cursor: pointer;
}

.logout{
    cursor: pointer;
}

.nav__search form button{
    height: 40px;
    width: 50px;
    border: none;
    background: #99B8E9;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.nav__cart{
    width: 150px;
    height: 40px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
}

.cart__counter{
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* position: relative; */
}

.circle p{
    font-size: 10px;
}

.cart__counter img{
    height: 20px;
}

.circle{
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    /* position: absolute; */
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
   

}

a{
    color: white;
    text-decoration: none;
}


@media screen and (max-width:768px) {
    .nav{
        padding-left: 20px;
        padding-right: 20px;
    }
    .nav__search form{
        display: none;
    }

    .menu{
        display: block;
    }

    .login{
        display: none;
    }

    .logout{
        display: none;
    }

    .nav__cart{
        width: 20px;
        border: none;
    }

    .nav__cart p{
        display: none;
    }

    
}
</style>