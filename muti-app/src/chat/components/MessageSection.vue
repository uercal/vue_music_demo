<template>
  <div class="message-section">
    <h3 class="message-thread-heading"></h3>
    <ul class="message-list" ref="list">
      <message
        v-for="message in messages"
        :message="message"
        :key="message.id"           
      ></message>
    </ul>
    <textarea class="message-composer" @keyup.enter="addMessage"></textarea>
  </div>
</template>

<script>
import Message from './Message.vue'
import { mapActions,mapGetters } from 'vuex'

export default {
  name:'MessageSection',
  components:{Message},
  computed:mapGetters([
    'messages',
    'currentThreadID'
  ]),
  methods:{
    addMessage:function(e){
      const text = e.target.value
      if(text.trim()){
        this.$store.dispatch('addMessage',{
          text,          
          t_id: this.currentThreadID        
        })
        e.target.value=''    
      }
    }
  }
}

</script>
