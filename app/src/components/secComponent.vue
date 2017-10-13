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
    'audio'
  ]),
  methods: mapActions([
    'Onbgm',
    'play'
  ]),
  mounted(){
    this.$store.dispatch('getBgm',{msg:"i am payload"});
  }
}
</script>

<style lang="scss">
.box-card .avatar{
  cursor:pointer;
}
</style>

