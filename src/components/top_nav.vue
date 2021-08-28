<template>
  <div>
      <nav class="nav">
          <div class="nav__hello">
              <!-- <p></p> -->
              <p>hello@kpk.com</p>
              <p>Vendor</p>
              <p>Riders</p>
          </div>
          <div class="nav__media">
              <img src="../assets/facebook.16ba6aef.svg" alt="facebook logo">
              <img src="../assets/twitter.7bd116d2.svg" alt="twitter">
              <img src="../assets/instagram.520ced86.svg" alt="instagram">
          </div>
      </nav>
  </div>
</template>

<script>

export default {
    data(){
        return {
            // name : ''
        }
    },
    computed:{
       
        
    }
}
</script>

<style scoped>

.nav{
    height: 50px;
    background:#E8EFFA;
    display: flex;
    align-items: center;
    padding-left: 150px;
    padding-right: 150px;
    justify-content: space-between;
}

.nav__hello{
    display: flex;
    width: 300px;
    justify-content: space-between;
    
}

.nav__media img{
    margin-left: 5px;
}

@media screen and (max-width:768px) {
    .nav{
        display: none;
    }
}

</style>