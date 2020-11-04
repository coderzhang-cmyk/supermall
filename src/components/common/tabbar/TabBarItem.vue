<template>
  <div class="tab-bar-item" @click="handleTabBar">
    <div v-if="!isActive">
      <slot name="tab-bar-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    isActiveColor: {
      type: String,
      default: 'rgb(156, 115, 194)'
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1 ;
    },
    activeStyle() {
      return this.isActive ? {color: this.isActiveColor} : {}
    }
  },
  methods: {
    handleTabBar() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
/* .active {
  color: rgb(156, 115, 194);
} */
</style>