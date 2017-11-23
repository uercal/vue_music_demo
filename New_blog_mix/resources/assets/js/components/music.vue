<template>
  <div id="secondcomponent" style="position:relative;">
    <div>
    <el-button @click="back" style="position:relative;float:left;">←</el-button>
    <br>
    <h1>{{title}}</h1>        
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/uercal">Uercal</a></p>    
    <el-button @click="showBgm">{{ show_title }}</el-button>
    <transition name="slide-fade">
    <el-card class="box-card" v-show="isload">
      <audio id="audio" src="" controls="controls"></audio>    
      <br>
      <br>
      <li v-for='(value,index) in bgm'>
        <img :src="value.src" class="avatar" style="height:100px" :title="value.title" @click="Onbgm(index)"></img>
      </li>
    </el-card>
    </transition>
    <ul v-if="isshow" v-for="value in playbgm">     
        <el-button href='javascript:;' @click="play(value)">{{value.name}}</el-button>
    </ul>    
    </div>
    <div id="back" :style="backStyle"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {  
  computed: mapGetters([
    'backStyle',
    'title',
    'author',
    'playbgm',
    'isload',
    'isshow',
    'bgm',
    'audio',
    'show_title'
  ]),
  methods:{
    ...mapActions([
    'Onbgm',    
    'showBgm',
    'play'
    ])       
    ,
    back:function(){
      window.location.href = '/'
    }
  },
  mounted(){
    // console.log(this.$el.querySelector('#audio'));    
    this.$store.dispatch('getBgm',{audio:this.$el.querySelector('#audio')});    
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.box-card .avatar{
  cursor:pointer;
}
#secondcomponent {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;  
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

.el-card{
  background-color:#000000;
  background-color:rgba(0,0,0,0);
}
.el-button {
  background-color:#000000;
  background-color:rgba(0,0,0,0.2);
  border: 0; 
  //padding:0;
}
#back{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;  
  opacity: 0.5;
  z-index:-1;
}
</style>

