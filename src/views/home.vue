<template>
  <div class="home">
    <div v-if="loading===true" class="loading__container">
      <Loader />
    </div>
    <div v-else class="container">
      <div class="product__box" v-for="product in products" :key="product.name">
        <img @click="goToDetails(product.id)" class="image" :src="product.image" alt="">
        <p @click="goToDetails(product.id)" class="product__box__name">{{product.name}}</p>
        <p class="product__box__desc">{{product.description.length > 35 ? product.description.substring(0,35) + '...' : item.description}}</p>
        <h3>${{product.price}}</h3>
        <div class="itemBox__button">
          <button @click="addProductToCart(product)" >ADD TO CART</button>
        </div>
      </div>
        
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import Loader from '../components/loader.vue'
import storage from '../utils/storage.js'


export default {
  components:{Loader},
  data(){
    return {

    }
  },
  
  computed:{
    ...mapState({
      products : (state) => state.products.products,
      loading : (state) => state.products.loading,
      status : (state) => state.cart.status
    }),
    
  },
  methods:{
    ...mapActions('products',['getProducts']),
    ...mapActions('cart',['addToCart']),
    ...mapActions('mobile',['closeMobileNav']),

    addProductToCart(product){
      if(!storage.getUserDetails()){
        this.$toast.show('You have to be logged in before adding products to cart')
      }
      else{
        this.addToCart(product)
      }
     
    },
    goToDetails(productId){
      this.$router.push({name:"details",params:{id:productId}})
    }
    
  },
  created(){
    this.getProducts()
  },
  mounted(){
    this.closeMobileNav()
  }
  
}
</script>

<style>
.loading__container{
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home{
  padding-left: 150px;
  padding-right: 150px;
  /* background: red; */
  padding-top: 50px;
  padding-bottom: 50px;
  background: #E8EFFA;
}
.container {
  display: grid;
  grid-template-columns: 230px 230px 230px 230px 230px;
  justify-content: space-between;
  grid-template-rows: 400px 400px 400px 400px;
  grid-auto-rows: 1fr;
  gap: 30px 5px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . .";
  width: 100%;
  height: 101%;
}



.product__box{
  background: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  padding: 10px;
  color: #102A55;
  cursor: pointer;
}

.product__box:hover .itemBox__button button{
  visibility: visible;
  transform: scale(1);
  opacity: 1;
}

.image{
  height: 200px;
  width: 100%;
}

.product__box__name{
  font-weight: 600;
  color: #344A6F;
}

.product__box__desc{
  color: #344A6F;
  margin-top: 5px;
  margin-bottom: 5px;
  /* font-size: 14px; */

}

.itemBox__button{
  display: flex;
  justify-content: center;
  margin-top: 30px;

}

.itemBox__button button{
  padding: 7px 20px;
  background: #102A55;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  visibility: hidden;
  transition: 0.2s;
  transform: scale(0.5);
  opacity: 0;
}

@media screen and (max-width:768px){
  .home{
    padding-left: 20px;
    padding-right: 20px;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }

  .product__box{
    width: 80%;
    height: auto;
    padding-bottom: 30px;
  }

  .itemBox__button button{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
}

</style>