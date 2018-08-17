<template>
  <div id="app">
    <p>这里是app的内容</p>
    <p>{{age}}</p>
    <hr>
    <demo></demo>
  </div>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: "app",
  data() {
    return {
      age: 19
    };
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
