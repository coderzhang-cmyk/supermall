<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <div slot="center">购物车({{ commodityLength }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["commodityLength"]),
  },
};
</script>

<style scoped>
.cart-nav-bar {
  background-color: var(--color-high-text);
  color: #ffffff;
}
</style>