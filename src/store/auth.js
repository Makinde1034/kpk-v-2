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
            loading : false,
            signInLoading: false
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
        signIn({commit},user){
            commit('signInAuthRequest')
            api.signIn(user).then((res)=>{
                const {data:{data}} = res

                const user = data.user
                const token = data.token
                storage.setToken(token)
                storage.setUserDetails(user);
                commit('authSuccess',token)
                // dispatch('cart/getCart',null,{ root: true }) 
                router.push('/')
            }).catch((err)=>{
                console.log(err)
                commit('authError')
            })
        },
        logOut({commit}){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            commit('logOut');
            // dispatch('cart/getCart',null,{ root: true }) 
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
            state.signInLoading = false
            
            
        },
        authError(state){
            state.status = 'error'
            state.loading = false
            state.loading = false
            state.signInLoading = false
            
        },
        // test
        signInAuthRequest(state){
            state.signInLoading = true
        },
        logOut(state){
            state.token = ''
        }
    }
}

export default auth