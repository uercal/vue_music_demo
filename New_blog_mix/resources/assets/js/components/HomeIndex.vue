<template>
  <div id="app">
    <img src="../static/logo.png"> 
    <ul>      
      <el-button onclick="window.location.href='/chat'">
        chat
      </el-button>              
    </ul>    
    <ul>
      <el-button onclick="window.location.href='/music'">
          music
      </el-button>
    </ul>
    <ul>
      <el-button onclick="window.location.href='/blog'">
          blog
      </el-button>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
