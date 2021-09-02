const mobile = {
    namespaced :true,
    state(){
        return {
            navOpen : false
        }
    },
    gettters:{

    },
    actions :{
        toggleMobileNav({commit}){
            commit('toggleMobileNav')
        },
        closeMobileNav({commit}){
            commit('closeMobileNav')
        }
    },
    mutations :{
        toggleMobileNav(state){
            state.navOpen = !state.navOpen
        },
        closeMobileNav(state){
            state.navOpen = false
        }
    }
}

export default mobile