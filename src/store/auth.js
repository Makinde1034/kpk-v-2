import api from '../utils/api.js'
import storage from '../utils/storage.js'
import router from '../router/index.js'

const auth = {
    namespaced:true,
    state(){
        return {
            status: '',
            token: storage.getToken() || '',
            name : storage.getUserDetails() || '',
            loading : false
        }
    },
    getters:{

    },
    actions:{
        signUp({commit},user){
            commit('authRequest');
            api.signUp(user).then((res)=>{
                const {data:{data}} = res
                const user = data.user
                const token = data.token
                storage.setToken(token);
                storage.setUserDetails(user)
                commit('authSuccess',token)
                router.push('/')
                console.log(data)
            }).catch(err =>{
                commit('authError');
                console.log(err)
            })
        },
    },
    mutations:{
        authRequest(state){
            state.status = 'loading'
            state.loading = true
            
        },
        authSuccess(state,token){
            state.token = token
            state.status = 'success'
            state.loading =false
            
            
        },
        authError(state){
            state.status = 'error'
            state.loading = false
            
        },
    }
}

export default auth