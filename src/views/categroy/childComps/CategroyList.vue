<template>
  <div class="categroy-list">
    <!-- {{list}} -->
    <categroy-list-item v-for="(item, index) in list" :key="index" :item="item" />
  </div>
</template>

<script>
import CategroyListItem from './CategroyListItem'
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
      CategroyListItem
    }
};
</script>

<style scoped>
.categroy-list {
  display: flex;
  flex-wrap: wrap;
  /* text-align: center; */
  padding: 20px 8px;
}
/* 去除所有最右边item的margin值 */
.categroy-list div:nth-child(3n) {
  margin: 0;
}
</style>