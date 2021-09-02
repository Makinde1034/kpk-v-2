<template>
    <div>
        <nav :class=" isNavOpen ? ['sidenav','sidenav--active'] : 'sidenav' ">
            <ul>
                <router-link v-if="!token" class="link" to="/signin">Sign in</router-link>
                <router-link v-if="!token" class="link" to="/signup">Sign up</router-link>
                <li @click="signOut">Log out</li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
    computed:{
        ...mapState({
            isNavOpen : (state) => state.mobile.navOpen,
            token : (state) => state.auth.token,
        })
    },
    methods:{
        ...mapActions('auth',['logOut']),

        signOut(){
            this.logOut()
        }
    }
}
</script>

<style scoped>

.sidenav{
    width: 100%;

    background: #102A55;
    transform: scale(0.8);
    position: absolute;
    transition: 0.2s ease;
    z-index: 0;
    opacity: 0;
    visibility: hidden;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: none;

}

.sidenav--active{
    transform: scale(1);
    opacity: 1;
    visibility: visible;
}

.sidenav ul{
    color: white;
    font-weight: bold;
    list-style: none;
    display: flex;
    flex-direction: column;
}

.sidenav ul li{
    margin-bottom: 20px;
}

.link{
    color: white;
    font-weight: bold;
    list-style: none;
    text-decoration: none;
    margin-bottom: 20px;
    
}

@media screen and (max-width:768px) {
    .sidenav{
        display: block;
    }
}
</style>