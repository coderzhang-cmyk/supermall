<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item
        v-for="(commodityItem, index) in $store.state.commodity"
        :key="index"
        :commodity-item="commodityItem"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/betterScroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";

export default {
  components: { Scroll, CartListItem },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>