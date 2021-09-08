<template>
    <div class="signIn">
        <form @submit.prevent="signUserIn" >
            <label for="Email">Email</label>
            <input required v-model="userDetails.email" placeholder="hello@gmail.com" type="text">
            <label for="Password">Password</label>
            <input required v-model="userDetails.password" placeholder="Password" type="password">
            <button :disabled='isLoading'>
                <p v-if="loading===false">Submit</p>
                <div v-else class="loader"></div>
            </button>
            <p class="error" v-if="status==='error'">An error occured, try again</p>
        </form>
        <router-link to="/signup">Already have an account ? sign up</router-link>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import storage from '../utils/storage.js'

export default {
    data(){
        return {
            userDetails:{
                email : '',
                password:"",
            
            }
        }
    },
    methods:{
        ...mapActions('auth',['signIn']),
        ...mapActions('cart',['getCart']),
        ...mapActions('mobile',['closeMobileNav']),

        signUserIn(){
            this.signIn(this.userDetails)
        }

    },
    computed:{
        ...mapState({
            loading : (state) => state.auth.signInLoading,
            status : (state) => state.auth.status
            
        }),
        isLoading(){
            return this.loading
        }
        
    },
    mounted(){
        this.closeMobileNav()
        const token = storage.getToken()
        if(token){
            this.$router.push("/")
        }
    },
    
}
</script>

<style scoped>
.signIn{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-top: 100px;
    background: #E8EFFA;
    height: 90vh;
}

.signIn form{
    display: flex;
    flex-direction: column;
    width: 25%;

}

.signIn form label{
    margin-bottom: 3px;
}

.signIn form input{
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #102A55;
    border-radius: 5px;
    padding-left: 20px;
    outline: none;
}

.signIn form button{
    height: 40px;
    background: #102A55;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader{
    height: 20px;
    width: 18px;
    border-radius: 50%;
    background: #102A55;
    border: 3px solid #102A55;
    border-top: 3px solid white;
    animation: load 0.5s linear infinite;
}

@keyframes load {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

.error{
    text-align: center;
    color: red;
    font-size: 12px;
    margin-top: 5px;
}

a{
    margin-top: 15px;
    font-size: 14px;
    color: black;
    text-decoration: none;
}

@media screen and (max-width:768px){
    .signIn{
        padding-left: 20px;
        padding-right: 20px;
    }
    .signIn form{
        width: 100%;
    }
}
</style>