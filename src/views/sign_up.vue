<template>
    <div class="signUp">
        <form @submit.prevent="signUpUser">
            <div class="box">
                <input required v-model="userDetails.first_name" placeholder="First name" type="text">
                <input required v-model="userDetails.last_name" placeholder="Last name" type="text">
            </div>
            <div class="box">
                <input required v-model="userDetails.email" placeholder="Email" type="email">
                <input required v-model="userDetails.phone_number" placeholder="Phonenumber" type="tel" >
            </div>
            <div class="address">
                <input required v-model="userDetails.address.street" placeholder="Street" type="text">
                <input required v-model="userDetails.address.lga" placeholder="LGA" type="text">
                <input required v-model="userDetails.address.state" placeholder="State" type="text">
            </div>
            <div class="box">
                <div class="rr">
                  <input required v-model="userDetails.password" placeholder="Password" type="text"> 
                  <span>{{msg.confirmPassword}}</span> 
                </div>
                <input required v-model="confirmPassword" placeholder="Confirm password" type="text">
            </div>
            <div class="submit">
                <button :disabled='isLoading'>
                    <p v-if="loading===false">Submit</p>
                    <div v-else class="loader"></div>
                </button>
            </div>
            <p class="error" v-if="status==='error'">An error occured, try again</p>
      </form>
      <router-link to="signin">No account ? log in</router-link>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import storage from '../utils/storage.js'

export default {
    data(){
        return {
            userDetails:{
                first_name : '',
                last_name : '',
                email : '',
                address:{
                    street:'',
                    lga:'',
                    state:'',
                },
                phone_number : '',
                password:"",
                
            },
            confirmPassword : "",
            msg:[]
            
        }
    },
    
    methods:{
        ...mapActions('auth',['signUp']),

        signUpUser(){
            
            if(this.validatePassword()===true){
                this.msg['confirmPassword'] = ''
                this.signUp(this.userDetails)
            }else{
                this.msg['confirmPassword'] = 'Password and confirm password do not match'
            }
            
        },
        validatePassword(){
            if(this.userDetails.password === this.confirmPassword){
                return true
            }else{
                return false
            }
        }

    },
    computed:{
        ...mapState({
            loading : (state) => state.auth.loading,
            status : (state) => state.auth.status,
        }),
        isLoading(){
            return this.loading
        }
    },
    mounted(){
        const token = storage.getToken()
        if(token){
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.signUp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    background: #E8EFFA;
    height: 80vh;
}

.signUp form{
    width: 50%;
}

.box{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.box input{
    width: 45%;
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #102A55;
    border-radius: 5px;
    padding-left: 20px;
}
.address{
    justify-content: space-between;
    display: flex;
}

.address input{
    width: 27%;
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #102A55;
    border-radius: 5px;
    padding-left: 20px;
}

.submit{
    display: flex;
    justify-content: center;
}

.submit button{
    height: 40px;
    width: 250px;
    background: #102A55;;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
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

.rr{
    display: flex;
    flex-direction: column;
    width: 45%;
}

.rr input{
    width: 100%;
}

.rr span {
    color: red;
    font-size: 12px;
}

.error{
    text-align: center;
    font-size: 12px;
    color: red;
}

a{
    margin-top: 15px;
    font-size: 14px;
    color: black;
    text-decoration: none;
}

@media screen and (max-width:768px){
    .signUp{
        padding-left: 20px;
        padding-right: 20px;
    }
    .signUp form{
        width: 100%;
    }
}
</style>