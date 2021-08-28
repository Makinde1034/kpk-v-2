<template>
  <div>
        <nav class="nav">
            
            <div class="nav__logo">
                <div class="menu">
                    <div class="line"></div>
                    <div class="line middle-line"></div>
                    <div class="line"></div>
                </div>
                <h3>KPK</h3>
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
            <p @click="logOut" v-if="token" class="logout">logout</p>
            <router-link v-if="!token" to="/signup">Sign up</router-link>
            <router-link v-if="!token" to="/signin">Log in</router-link>
            <p v-if="token">{{userDetails.first_name}}</p>
            <div @click="openCart" class="nav__cart">
                <p>Cart</p>
                <div  class="cart__counter">
                    <img src="../assets/trolley.d9c304ca.svg" alt="">
                    <div class="circle"></div>
                </div>
            </div>
      </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import storage from '../utils/storage.js'

export default {
    
    methods:{
        
        
    },
    computed:{
        ...mapState({
            token : (state) => state.auth.token
        }),
        userDetails(){
            return storage.getUserDetails()
        }
    
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

.menu{
    margin-right: 10px;
    display: none;
}

.line{
    height: 4px;
    width: 30px;
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