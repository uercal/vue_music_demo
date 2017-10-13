<template>
  <div>
    Value: {{ count_first }}
    <button @click="increment_first">+</button>
    <button @click="decrement_first">-</button>
    <button @click="incrementIfOdd_first">Increment if odd</button>
    <button @click="incrementAsync_first">Increment async</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'count_first',
    'recentHistory'
  ]),
  methods: mapActions([
    'increment_first',
    'decrement_first',
    'incrementIfOdd_first',
    'incrementAsync_first'
  ])
}
</script>
