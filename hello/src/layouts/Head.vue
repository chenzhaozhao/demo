<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="updateMenu('处理中心')">
      <router-link to="/deal">处理中心</router-link>
    </el-menu-item>
    <el-menu-item index="2" @click="updateMenu('我的工作台')">
      <router-link to="/work">我的工作台</router-link>
    </el-menu-item>
    <el-menu-item index="3" @click="updateMenu('消息中心')">
      <router-link to="/msg">消息中心</router-link>
    </el-menu-item>
    <el-menu-item index="4" @click="updateMenu('订单管理')">
      <router-link to="/manage">订单管理</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "Head",
  data() {
    return {
      activeIndex: "0"
    };
  },
  methods: {
    updateMenu(name) {
      var link='';
      console.log(name)
      switch(name){
        case '处理中心':
          link='/deal';
          break;
          case '我的工作台':
          link='/work';
          break;
          case '消息中心':
          link='/msg';
          break;
          case '订单管理':
          link='/mange';
          break;
      }
      this.$store.commit("updateMenu", [
        { title: name, id: 1, sub: [{ title: "订单处理", id: 101 }] }
      ]);
       this.$store.commit("push", {
          title:name,
          name: "3",
          link:link
        });
    },
    handleSelect() {}
  }
};
</script>