<template>
  <div id="app">
    <h1>用户列表</h1>
    <el-button @click="showAddDialog" type="success">添加用户</el-button>
    <hr>
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
          <td>
            <a @click="delUser(item.id)" href="javascript:">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="60%">
      <h3>添加用户信息</h3>
      <hr>
      <el-form :model="form">
        <el-form-item label="用户名" label-width="120px">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="120px">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="120px">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
      
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd">添加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Demo from "./components/Demo";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios"; // ajax
import { Message, MessageBox } from "element-ui";

export default {
  name: "app",
  data() {
    return {
      age: 19,
      userList: [],
      addDialogVisible: false,
      form: {
        name: "",
        phone: "",
        address: "",
        id: Date.now()
      }
    };
  },
  methods: {
    submitAdd() {
      this.id = Date.now();
      axios
        .post("http://localhost:12345/users/", this.form)
        .then(res => {
          Message.info("添加数据成功！");
          this.userList.push(res.data);
          this.addDialogVisible = false;
        })
        .catch(() => {
          Message.info("添加失败！");
        });
    },
    showAddDialog() {
      this.addDialogVisible = true;
    },
    delUser(id) {
      MessageBox.confirm("是否真的要删除吗？", "删除提醒")
        .then(() => {
          axios
            .delete("http://localhost:12345/users/" + id)
            .then(res => { // eslint-disable-line
              let delIndex = this.userList.findIndex(item => item.id === id);
              if (delIndex >= 0) {
                this.userList.splice(delIndex, 1);
              }
              Message.info("删除成功！");
            })
            .catch(() => {
              Message.info("删除失败！");
            });
        })
        .catch(() => {
          Message.info("取消删除了！");
        });
    }
  },
  created() {
    axios
      .get("http://localhost:12345/users")
      .then(res => {
        this.userList = res.data;
        // this.userList.push(...res.data);
      })
      .catch(e => {
        Message.info("加载失败！" + e);
      }); // eslint-disable-line
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
