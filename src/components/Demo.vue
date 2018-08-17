<template>
  <div class="demo">
    <h3> {{dd}}</h3>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      dd: "aicoder.com "
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  h3 {
    font-size: 20px;
    color: green;
  }
}
</style>
