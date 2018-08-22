<template>
  <tr class="row">
    <template v-if="isEdit">
      <td v-for="(item, index) of propsArray" :key="index">
        <template v-if="item=='id'">
          {{userObj[item]}}
        </template>
        <template v-else>
          <input type="text" v-model="userObj[item]">
        </template>
      </td>
      <td>
        <a @click="cancleEdit" href="javascript:">取消</a>&nbsp;
        <a @click="saveUser" href="javascript:">保存</a>
      </td>
    </template>
    <template v-else>
      <td v-for="(item, index) of propsArray" :key="index">
        {{userObj[item]}}
      </td>
      <td>
        <a @click="delUser()" href="javascript:">删除</a>&nbsp;
        <a @click="isEdit=true" href="javascript:">编辑</a>
      </td>
    </template>

  </tr>
</template>

<script>
import axios from "axios";
import { Message } from "element-ui";

export default {
  name: "row",
  props: ["rowData", "propsArray"], // 属性不要进行修改
  data() {
    return {
      isEdit: false,
      // userObj: { ...this.rowData }
      userObj: Object.assign({}, this.rowData)
    };
  },
  methods: {
    cancleEdit() {
      Object.assign(this.userObj, this.rowData);
      this.isEdit = false;
    },
    delUser() {
      this.$emit("delete:id", this.rowData.id);
    },
    saveUser() {
      // console.log(this.userObj);
      axios
        .put(`http://localhost:12345/users/${this.rowData.id}`, this.userObj)
        .then(() => {
          this.$emit("update:user", { ...this.userObj });
          this.isEdit = false;
          Message.success("编辑成功！");
        })
        .catch(() => {
          Message.error("保存失败！");
        });
    }
  }
};
</script>

<style scoped>
</style>
