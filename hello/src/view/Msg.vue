<template>
  <div class="hello">
   <Tabs />
   这是消息中心
  </div>
</template>

<script>
import Tabs from '../components/Tabs'
export default {
  name: 'HelloWorld',
  components:{
   Tabs,
  },
  created(){
    console.log(this.$store)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>