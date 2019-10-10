<template>
  <div id="app">
    <Head />
    <div style="display:flex;width:100%">
      <Menu />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Head from "./layouts/Head";
import Menu from "./layouts/Menu";
export default {
  name: "app",
  components: {
    Head,
    Menu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
