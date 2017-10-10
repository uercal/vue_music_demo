<template>
  <div id="secondcomponent">
    <h1>{{title}}</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/uercal">Uercal</a></p>
    <el-card class="box-card"> 
      <img id="bgm" v-if="isload" :src="bgm.src" class="avatar" style="height:100px" :title="bgm.title" @click="Onbgm"></img>
      <ul v-if="isshow" v-for="value in bgm.tracks">
        <a href='javascript:;' @click="play(value.id)">{{value.name}}</a>
      </ul>
    </el-card>
    <audio ref="audio"></audio>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      title:'Second',
      author: "uercal",
      isload:false,
      isshow:false,
      isPlaying:false,
      bgm:{
        title:'',
        src:'',
        tracks:[]
      }      
    }
  },
  mounted:function(){    
    this.$http.get('https://bird.ioliu.cn/netease/playlist?id=864480097',{},{
      // this.$http.jsonp('http://localhost:1122/base/teachers/list',{},{
      headers:{},
      emulateJSON:true
    }).then(function(res){       
      // this.articles = res.data      
      this.bgm.title = res.data.playlist.name;
      this.bgm.src = res.data.playlist.coverImgUrl;
      this.bgm.tracks=res.data.playlist.tracks;
      this.isload = true;
    },function(res){
      console.log(res)
    });
  },
  methods:{
    Onbgm:function(){      
      this.isload = false;
      this.isshow = true;
    },
    play:function(id){         
      this.$http.get('https://bird.ioliu.cn/netease/song?id='+id,{},{      
        headers:{},
        emulateJSON:true
      }).then(function(res){
        // console.log(res.data.data.mp3.url);
        this.isPlaying = true;           
        let audio = this.$refs.audio;
        audio.src = res.data.data.mp3.url;        
        audio.play();
        this.isPlaying = true;
      },function(res){
        console.log(res)
      });
    }
  }
}
</script>

<style lang="scss">
.box-card #bgm{
  cursor:pointer;
}
</style>

