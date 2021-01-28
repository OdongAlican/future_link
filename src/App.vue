<template>
  <div id="app">
    <div class="container">
      <div class="addcutomer-section">
        <AddCustomer/>
      </div>
      <Customers/>
    </div>
  </div>
</template>

<script>
import Customers from './components/Customers.vue'
import AddCustomer from './components/AddCustomer.vue'

export default {
  name: 'App',
  components: {
    Customers,
    AddCustomer
  }
}
</script>

<style>
</style>
