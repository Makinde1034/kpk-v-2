<template>
  <div class="signIn">
      <form action="">
          <label for="">Email</label>
          <input placeholder="hello@gmail.com" type="text">
          <label for="">Password</label>
          <input placeholder="Password" type="text">
          <button>Login</button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.signIn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
}

.signIn form{
    display: flex;
    flex-direction: column;
    width: 25%;

}

.signIn form label{
    margin-bottom: 3px;
}

.signIn form input{
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #102A55;
    border-radius: 5px;
    padding-left: 20px;
}

.signIn form button{
    height: 40px;
    background: #102A55;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    cursor: pointer;
}
</style>