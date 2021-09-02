<template>
    <div class="cart">
        <div v-for="item in cartItems" :key="item.name" class="productBox">
            <div class="productBox__img">
                <img :src="item.image" alt="">
            </div>
            <div class="productBox__details">
                <p class="name">{{item.name}}</p>
                <p class="desc">{{item.description.length > 30 ? item.description.substring(0,30) + '...' : item.description}}</p>
            </div>
            <div class="productBox__quantity">
                <label for="">Quantity</label>
                <div class="quantity__img">
                    <img @click="removeItemFromCart(item.id)" src="../assets/chevron-down.2c726049.svg" alt="arrow-down">
                    <p>{{item.quantity}}</p>
                    <img @click="addItemToCart(item)" src="../assets/chevron-up.2e2e05ba.svg" alt="arrow-up">
                </div>
            </div>
            <div class="unitPrice">
                <label for="">Unit price</label>
                <p>${{item.price.toLocaleString()}}</p>
            </div>
            <div class="subPrice">
                <label for="">Sub price</label>
                <p>${{item.sub_total.toLocaleString()}}</p>
            </div>
            <div class="delete">
                <img @click="deleteItem(item.id)" src="../assets/trash.25428244.svg" alt="">
            </div>
        </div>
        <div v-if="cartItems.length > 0" class="total">
            <p>Total amount : <span>${{total.toLocaleString()}}</span></p>
            <p>Delivery fee : <span>${{deliveryFee.toLocaleString()}}</span></p>
        </div>
        <div v-if="cartItems.length > 0" class="checkout">
            <button>Checkout</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import storage from '../utils/storage.js'

export default {
    data(){
        return {

        }
    },
    methods:{
        ...mapActions('cart',['getCart','removeFromCart','addToCart','deleteFromCart']),

        removeItemFromCart(id){
            const payload = {
                product_id : id
            }
            this.removeFromCart(payload)
        },
        addItemToCart(item){
            
            this.addToCart(item)
        },
        deleteItem(id){
            const payload = {
                product_id : id
            }
            this.deleteFromCart(payload)
        }
    },
    computed:{
        ...mapState({
            cartItems : (state) => state.cart.cartItems,
            total : (state) => state.cart.total,
            deliveryFee : (state) => state.cart.delivery
        })
    },
    created(){
        this.getCart()
    },
    mounted(){
        const token = storage.getToken()
        if(!token){
            this.$router.push("/signin")
            this.$toast.show('you have to be logged in to access cart')
        }
    }
}
</script>

<style scoped>
.cart{
    height: 80vh;
    background: #E8EFFA;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 50px;
    overflow: auto;
    padding-bottom: 100px;
}

.cart::-webkit-scrollbar {
  width: 0px;
}


 
.cart::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
.cart::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}


.productBox{
    /* width: 100%; */
    height: 150px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 30px;
}

.name{
    font-weight: 500;
}

.productBox__img{
    height: 100px;
    width: 100px;
    overflow: hidden;
}

.productBox__img img{
    height: 100%;
    width: 100%;
}

.productBox__details{
    width: 300px;
}

.quantity__img{
    display: flex;
}

.quantity__img img{
    cursor: pointer;
}

.delete img{
    cursor: pointer;
}

.unitPrice p{
    text-align: center;
    margin-top: 5px;
}

.subPrice p{
    text-align: center;
    margin-top: 5px;
}

.delete img{
    height: 18px;
}

.total{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.total p{
   
    font-weight: 400;
    font-size: 18px;
    color:#102A55;
    margin-top: 20px;
}

.total span {
    font-weight: 700;
}

.checkout{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.checkout button{
    height: 40px;
    width: 200px;
    border: none;
    background: rgb(109, 209, 109);
    color: white;
    font-weight: bold;
    border-radius: 5px;
}

label{
    font-weight: 500;
}

@media screen and (max-width:768px) {
    .cart{
        padding-left: 20px;
        padding-right: 20px;
        
    }

    .productBox{
        flex-direction: column;
        height: auto;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .name{
        text-align: center;
        font-size: 22px;
        margin-bottom: 10px;
    }

    .desc{
        text-align: center;
        margin-bottom: 10px;
    }

    .productBox__quantity{
        margin-bottom: 5px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .productBox__quantity label{
        font-size: 20px;
    }

    .unitPrice{
        margin-bottom: 5px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .unitPrice label, .subPrice label{
        font-size: 20px;
    }

    .quantity__img{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quantity__img img{
        height: 30px;
    }

    .delete img{
        height: 30px;
    }
}
</style>