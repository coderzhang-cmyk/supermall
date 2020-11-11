<template>
  <div class="detail-recommend-info">
    <goods-list :goodsList="recommendInfo" />
  </div>
</template>

<script>
import GoodsList from "components/content/goodsList/GoodsList";

export default {
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsList,
  },
};
</script>

<style scoped>
.detail-recommend-info {
  margin-top: 20px;
}
</style>