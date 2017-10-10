<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>       
    <ul>
      <li><router-link to="/first">111</router-link></li>
      <li><router-link to="/second">222</router-link></li>
      <li><a href='javascript:;' @click="play">play</a></li>
    </ul>
    <router-view class="view"></router-view>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Uercal\'s App'      
    }
  },
  methods:{
    play:function(){         
      // this.msg = '123'
    }
  }
}
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
