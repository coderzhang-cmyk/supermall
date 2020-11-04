<template>
  <div class="tab-control">
    <div class="tab-control-item" 
         v-for="(item, index) in titles" 
         :key="item"
         @click="handleTabControlBtn(index)">
      <span :class="{active: currentIndex === index}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    handleTabControlBtn(index) {
      console.log('11');
      this.currentIndex = index
      this.$emit('handleTabControlBtn', index)
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
  z-index: 1;
}
.tab-control-item {
  flex: 1;
 height: 40px;
 line-height: 40px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
  padding: 5px;
}
</style>