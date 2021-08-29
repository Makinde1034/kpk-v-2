import api from '../utils/api.js'


const cart = {
    namespaced:true,
    state(){
        return {
            cartItems:[],
            status:"",
            toastMsg:"",
            showToast:false,
            total :"",
            delivery : ""
        }
    },
    getters:{

    },
    actions:{

        addToCart({commit,dispatch},product){
            const payload = {
                product_id : product.id
            }
            api.addToCart(payload).then((res)=>{
            console.log(res)
            commit('setToastMsg',product)
            commit("success")
            commit("showToast")
            dispatch("getCart")
            }).catch((err)=>{
                alert(err)
            })
        },
        getCart({commit}){
            api.getCart().then((res)=>{
                const{data:{data}} = res
                const totalPrice = data.cart.total_price
                const delivery = data.cart.dispatch
                console.log(data.cart);
                commit('setCart',data.cart.items);
                commit('setTotalPrice',totalPrice)
                commit('setDelivery',delivery)
            })
        },
        deleteFromCart({dispatch},payload){
            api.deleteFromCart(payload).then((res)=>{
                console.log(res);
                dispatch('getCart')
            })
        },
        removeFromCart({dispatch},payload){
            api.removeFromCart(payload).then((res)=>{
                console.log(res)
                dispatch('getCart')
            })
        }
        
    },
    mutations:{
        success(state){
            state.status = 'success'
        },
        setToastMsg(state,product){
            state.toastMsg = `Added ${product.name} to cart`
        },
        showToast(state){
            state.showToast = true
            setTimeout(() => {
                state.showToast = false
            },3000);
        
        },
        setCart(state,payload){
            state.cartItems = payload
        },
        setTotalPrice(state,payload){
            state.total = payload
        },
        setDelivery(state,payload){
            state.delivery = payload
        }
    }
}

export default cart