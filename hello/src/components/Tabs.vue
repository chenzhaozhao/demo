<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    @tab-remove="removeTab"
    @tab-click="tabClick"
  >
    <el-tab-pane
      v-for="(item,index) in editableTabs"
      :key="item.title"
      :label="item.title"
      :name="item.title+','+index"
    ></el-tab-pane>
  </el-tabs>
</template>
<script>
import router from "vue-router";
export default {
  name: "Tabs",
  data() {
    return {
      editableTabsValue: "2"
    };
  },
  computed: {
    editableTabs() {
      return this.$store.state.tabs;
    }
  },
  methods: {
    removeTab(index) {
       var index=index.split(',')[1]
       console.log(index)
        this.$store.commit('del',index)
        console.log(this.$store.state.tabs)
       if(index==0){
         this.$router.push({path:index})
         return
       }
        this.$router.push({path:this.$store.state.tabs[index-1].link})
        
    },
    tabClick(value) {
      console.log(value.$el.id);
      switch (value.$el.id.split(',')[0]) {
        case "pane-处理中心":
          this.$router.push({ path: "deal" });
          return;
        case "pane-我的工作台":
          this.$router.push({ path: "work" });
          return;
        case "pane-消息中心":
          this.$router.push({ path: "msg" });
          return;
        case "pane-订单管理":
          this.$router.push({ path: "manage" });
          return;
      }
    }
  }
};
</script>