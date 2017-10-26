<template>
  <li
    class="thread-list-item"
    :class="{ active: active }"
    @click ="$emit('switchThread',thread.tid)">
    <h5 class="thread-name">{{ thread.message.threadName }}</h5>
    <div class="thread-time">
      {{ thread.message.timestamp | time }}
    </div>
    <div class="thread-last-message">
      {{ thread.message.text }}
    </div>
  </li>
</template>

<script>
export default {
  name:'thread',
  props:{
    thread:Object,
    active:Boolean
  }
}
</script>
