<template>
  <div class="cart">
    <cart-nav-bar />
    <cart-list />
    <cart-bottm-bar />
  </div>
</template>

<script>
import CartNavBar from "./childComps/CartNavBar";
import CartList from "./childComps/CartList";
import CartBottmBar from "./childComps/CartBottomBar";
export default {
  components: {
    CartNavBar,
    CartList,
    CartBottmBar,
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
</style>