<template>
  <div class="app-home-section">
    <div class="side-bar-section-app">
      <SideBar/>
    </div>
    <div class="container-main-section">
      <span></span><router-link to="/"></router-link>
      <span></span><router-link to="/add-customer"></router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
export default {
  name: 'App',
  components:{
    SideBar
  }
}
</script>

<style>
  .app-home-section {
    display: flex;
  }

  .side-bar-section-app {
    width: 200px;
  }

  .container-main-section {
    flex: 1;
  }

  .upper-search-section {
    display: flex;
    padding: 16px;
  }

  .input-search-section {
        flex: 3;
    }

  .input-search-section input {
      height: 50px;
      width: 90%;
      border: none;
      font-size: 13px;
      color: gray;
      padding: 0 10px;
      margin-left: 10px;
      font-weight: 300;
      outline: none;
      cursor: pointer;
  }

  .create-cutomer-button-section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .create-cutomer-button-section button {
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 3px;
      padding: 5px 20px;
      color: #fff;
      font-weight: bold;
      margin-right: 10px;
      background-color: #70D25F;
  }

  .header-section {
    font-size: 20px;
    font-weight: 600;
    padding: 16px;
    background-color: #ECF0F3;
  }
</style>
