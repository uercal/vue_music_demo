<template>
  <div id="app">
    <img src="./assets/2.png">         
    <ul>
      <li><router-link to="/first">111</router-link></li>
      <li><router-link to="/second">Music</router-link></li>
      <li><router-link to="/demo">demo</router-link></li>
      <li><router-link to="/Cart">Cart</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
