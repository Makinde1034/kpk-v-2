<template>
    <div  :class="showToast ? ['toast','toast--active'] : 'toast' ">
      <img src="../assets/check.png" alt="">
      <p>{{toastMsg}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
            toastMsg : (state) => state.cart.toastMsg,
            showToast : (state) => state.cart.showToast
        })
    }
}
</script>

<style>
.toast{
    /* height: 50px; */
    padding: 10px;
    background: white;
    position: fixed;
    top: 110px;
    left: 50%;
    transform: translate(-50%,-50%) translateY(-20px);
    /* overflow: auto; */
    z-index: 5;
    border-radius: 5px;
    visibility: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    opacity: 0;
    transition: 0.5s;
    border: 1px solid black;
    display: flex;
    align-items: center;
}

.toast img{
    height: 20px;
}

.toast p{
    font-weight: 600;
    text-align: center;

}

.toast--active{
    visibility: visible;
    opacity: 1;
     transform: translate(-50%,-50%) translateY(0px);
     z-index: 10;
}
</style>