import api from '../utils/api.js'

const products  = {
    namespaced : true,
    state(){
        return{
            products:[],
            loading:true
        }
    },
    getters:{
        
    },
    actions:{
        async getProducts({commit}){
            
            api.getProducts().then((res)=>{
                const {data:{data}} = res
                console.log(data)
                commit('setProduct',res.data.data)
                commit('setLoading')
            })
        }
    },
    mutations:{
        setProduct(state,payload){
            state.products = payload
        },
        setLoading(state){
            state.loading = false
        }
    }
}

export default products