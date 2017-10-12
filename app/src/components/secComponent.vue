<template>
  <div id="secondcomponent">
    <h1>{{title}}</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/uercal">Uercal</a></p>
    <el-card class="box-card">
      <li v-for='(value,index) in bgm' v-if="isload">        
        <img :src="value.src" class="avatar" style="height:100px" :title="value.title" @click="Onbgm(index)"></img>
      </li>
      <ul v-if="isshow" v-for="value in playbgm">
          <a href='javascript:;' @click="play(value.id)">{{value.name}}</a>
      </ul>
    </el-card>
    <audio ref='audio'></audio>  
  </div>  
</template>

<script>
export default {
  data() {
    return {
      ids:3,
      title:'Second',
      author: "uercal",
      isload:false,
      isshow:false,
      // isPlaying:false,
      bgm:[],
      playbgm:[]      
    }
  },
  mounted:function(){
    var ids = [867822471,150524989,815980319];
    var data =[];
    for(var i in ids){
      this.$http.get('https://bird.ioliu.cn/netease/playlist?id='+ids[i],{},{    
        headers:{},
        emulateJSON:true
      }).then(function(res){                    
        data.push({
          title:res.data.playlist.name,
          src:res.data.playlist.coverImgUrl,
          tracks:res.data.playlist.tracks
        });        
      },function(res){
        console.log(res)
      });      
    }
    this.bgm = data;
    this.isload = true;    
    // console.log(data);
  },
  methods:{
    Onbgm:function(index){
      console.log(index);
      this.playbgm = this.bgm[index]['tracks'];
      console.log(this.playbgm);
      this.isshow = true;
    },
    play:function(id){         
      this.$http.get('https://bird.ioliu.cn/netease/song?id='+id,{},{      
        headers:{},
        emulateJSON:true
      }).then(res=>{
        let audio = this.$refs.audio;
        audio.src = res.data.data.mp3.url;
        audio.play();
      }).catch(function(res){
        console.log(res);
      });         
    }
  }
}
</script>

<style lang="scss">
.box-card .avatar{
  cursor:pointer;
}
</style>

