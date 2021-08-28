<template>
  <div>
      <div class="loader"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader{
    height: 50px;
    width: 50px;
    background:  #E8EFFA;
    border: 5px solid #E8EFFA;;
    border-top: 5px solid #102A55;
    border-radius: 50%;
    animation: load 0.5s linear infinite;
}

@keyframes load {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>