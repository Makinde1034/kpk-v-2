<template>
  <div>
    <TopNav />
    <BottomNav />
    <Toast />
    <SideNav />
    <router-view />
  </div>
</template>

<script>
import TopNav from './components/top_nav.vue'
import BottomNav from './components/bottom_nav.vue'
import Toast from './components/toast.vue'
import SideNav from './components/side_nav.vue'
export default {
  name: 'App',
  components: {
    TopNav,BottomNav,Toast,SideNav
  }
}
</script>

<style>
*{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
