<template>
  <div id="secondcomponent" style="position:relative;height:100%;">    
    <div id="player" class="aplayer">                 
    </div>
    <div id="list" style="height:100%;width:25%;overflow-x:hidden;overflow-y:auto;">
      <el-button @click="back">←</el-button>                                 
      <p> 感谢 <a href="https://github.com/uercal">Uercal</a></p>
      <el-button @click="showBgm">{{ show_title }}</el-button>
      <transition name="slide-fade">
        <el-card class="box-card" v-show="isload">                  
          <br>
          <li v-for='(value,index) in bgm'>
            <img :src="value.src" class="avatar" style="height:50px" :title="value.title" @click="Onbgm(index)"></img>
          </li>
        </el-card>
      </transition>
      <ul v-if="isshow" v-for="value in playbgm">     
          <el-button href='javascript:;' @click="play(value)">{{value.name}}</el-button>
      </ul>      
    </div>
    <div id="back">
      <img :src="backStyle" id="image">
    </div>
  </div>
  
</template>

<script>

import APlayer from 'APlayer';
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
    'show_title',
    'lrc'
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
    console.log(this);
    // var ap1 = new APlayer({
    //   element: document.getElementById('player'),
    //   narrow: false,
    //   autoplay: false,
    //   showlrc: 1,
    //   music: {
    //       title: 'Demo',
    //       author: 'Uercal',
    //       url: '',
    //       pic: '../images/1.jpg',
    //       lrc: this.lrc,
    //   }
    // });
    
    // console.log(ap1);
    var ap1 = document.getElementById('player');
    this.$store.dispatch('getBgm',{audio:ap1});
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
  border:0;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0);
  -webkit-box-shadow:0;  
}
.el-button {
  background-color:#000000;
  background-color:rgba(0,0,0,0.2);
  border: 0; 
  
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
#image{
  /* margin:0 auto; */  
  height: 100%;
  /* -webkit-filter: blur(4px); filter: blur(4px);  */
}
#player{
  width:40%;
  position:fixed;
  margin:0 auto;
  left:0;
  right:0; 
  bottom: 0;
  z-index:1;
  box-shadow:0 !important;
}
svg{
  display:none;
}
.aplayer{
  box-shadow:0 0 0 0 rgba(0,0,0,0) !important;
}
.aplayer-pic{
  position: absolute !important;
  bottom: 0;
}
.aplayer-info{
  height:auto !important;
}
.aplayer-lrc{
  background:0 !important;
  height:450px !important;
}
.aplayer .aplayer-lrc p{
  color:#fffbfb;
  font-size:13px;
  /* height: 1% !important; */
}
.aplayer-lrc:before{
  background:0 !important;
}
.aplayer-lrc:after{
  background:0 !important;
}
.aplayer-title{
  color:lightblue;
  font-size: 16px !important;
}
.aplayer-author{
  color:lightblue !important;
  font-size: 16px !important;
}


/* 滚动条  顶上圆角*/
#list::-webkit-scrollbar  
{  
    width: 16px;  
    height: 16px;      
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
#list::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;      
    opacity: 0.5;
}  
  
/*定义滑块 内阴影+圆角*/  
#list::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #ded4d4;  
}  
</style>

