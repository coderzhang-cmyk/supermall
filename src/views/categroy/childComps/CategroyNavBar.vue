<template>
  <nav-bar class="categroy-nav-bar">
    <div slot="center">商品分类</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>