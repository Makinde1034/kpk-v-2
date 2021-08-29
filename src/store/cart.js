import api from '../utils/api.js'


const cart = {
    namespaced:true,
    state(){
        return {
            status:"",
            toastMsg:"",
            showToast:false
        }
    },
    getters:{

    },
    actions:{

        addToCart({commit},product){
            const payload = {
                product_id : product.id
            }
            api.addToCart(payload).then((res)=>{
            console.log(res)
            // dispatch("getCart");
            commit('setToastMsg',product)
            commit("success")
            commit("showToast")
            // dispatch('getCart')
            }).catch((err)=>{
                alert(err)
            })
        },
        
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
        
        }
    }
}

export default cart