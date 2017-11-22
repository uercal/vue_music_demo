<template>
  <div id="secondcomponent">
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
        <el-button href='javascript:;' @click="play(value.id)">{{value.name}}</el-button>
    </ul>    
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
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
</style>

