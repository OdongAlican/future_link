<template>
  <div id="app">
    <div class="container">
      <span></span><router-link to="/"></router-link>
      <span></span><router-link to="/add-customer"></router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
