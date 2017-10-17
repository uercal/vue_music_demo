<template>
  <div id="app">   
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from './listComponent.vue'
import Cart from './cartComponent.vue'

export default {
  components: { ProductList , Cart }
}
</script>
