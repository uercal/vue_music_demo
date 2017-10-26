<template>
  <div class="thread-section">
    <div class="thread-count">
      <!-- <span v-show="unreadCount">
        Unread threads: {{ unreadCount }}
      </span> -->
      <el-button @click="back">←</el-button>
    </div>
    <ul class="thread-list">      
      <thread 
      v-for="thread in threads" 
      :thread="thread" 
      :key="thread.id"
      :active = "thread.tid==currentThreadID"
      @switchThread = "switchThread"
      ></thread>
    </ul>
  </div>
</template>

<script>
import Thread from './Thread.vue'
import { mapActions,mapGetters } from 'vuex'

export default {
  name:'ThreadSection',
  components:{ Thread },
  computed:mapGetters([
    'threads',
    'currentThreadID'
  ]),
  methods:{
    ...mapActions([
      'switchThread'
    ]),
    back:()=>{
      window.location.href = '/'
    }
  },
  mounted:function(){
    this.$store.dispatch('getAllMessages');    
  }
}
</script>