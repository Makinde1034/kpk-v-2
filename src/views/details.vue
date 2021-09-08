<template>
    <div class="details">
        <div v-for="product in products" :key="product.name">
            <div  class="box" v-if="product.id === productId">
                <img :src="product.image" alt="">
                <div class="desc">
                    <h3>{{product.name}}</h3>
                    <p>{{product.description}}</p>
                    <h2>${{product.price}}</h2>
                    <button @click="addProductToCart(product)" >Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import storage from '../utils/storage.js'
export default {
    data(){
        return {
            productId : this.$route.params.id
        }
    },
    methods:{
    ...mapActions('cart',['addToCart']),

        addProductToCart(product){
            if(!storage.getUserDetails()){
                this.$toast.show('You have to be logged in before adding products to cart')
            }
            else{
                this.addToCart(product)
            }
        }, 
        
    
    
    },
    computed:{
        ...mapState({
            products : (state) => state.products.products
        })
    }
    
}
</script>

<style scoped>
.details{
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 20px;
    background: #E8EFFA;
    height: 90vh;
}

.box{
    width: 70%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    background: white;
    display: flex;
    border-radius: 5px;
    padding: 30px;
}

.box img{
    width: 400px;
}

.desc{
    margin-left: 20px;
}

.desc h3{
    color: #102A55;
    font-size: 30px;
}

.desc p{
    margin-top: 20px;
    font-size: 18px;
    line-height: 30px;
}

.desc h2{
    color: #102A55;
    margin-top: 30px;
}

.desc button{
    width: 100%;
    height: 50px;
    background: #102A55;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
}

@media screen and (max-wi) {
    
}
</style>