<template>
  <div class="goods-list">
    <transition-group tag="div" class="goods-list">
      <goods-list-item
        v-for="item in goodsList"
        :key="item.acm"
        :goods-list-item="item"
      ></goods-list-item>
    </transition-group>
  </div>
</template>

<script>
import goodsListItem from "./GoodsListItem";
export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    goodsListItem,
  },
};
</script>

<style scoped>
.goods-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}
.v-move {
  opacity: 0;
  transition: all 0.0001s ease;
}
.v-leave-active {
  position: absolute;
  bottom: 0;
}
</style>