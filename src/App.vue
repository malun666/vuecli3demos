<template>
  <div id="app">
    <h1>用户列表</h1>
    <table class="table is-striped is-bordered">
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>电话</th>
          <th>地址</th>
          <th>编辑</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of userList" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td><a href="javascript:">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Demo from "./components/Demo";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios"; // ajax

export default {
  name: "app",
  data() {
    return {
      age: 19,
      userList: []
    };
  },
  created() {
    axios.get("http://localhost:12345/users").then(res => {
      this.userList = res.data;
      // this.userList.push(...res.data);
    });

    // .catch(e => {});
  },
  components: {
    demo: Demo
  }
};
</script>

<style lang="scss">
$red: red;
#app {
  p {
    color: $red;
  }
}
</style>
