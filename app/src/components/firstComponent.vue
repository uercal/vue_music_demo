<template>
  <div id="firstcomponent">
    <h1>First.</h1>
    <a> written by {{ author }} </a>
    <ul>
      <li>
        <a href='javascript:;'></a>
      </li>        
    </ul>
  </div>
    
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "uercal",
      data:[]
    }
  },mounted:function(){    
    this.$http.get('http://localhost:1122/base/teachers/list').then(function(res){       
      console.log(res.data);
    },function(res){
      console.log(res)
    });
  }
}
</script>

<style>
</style>