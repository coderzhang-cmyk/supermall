<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #e7e3e3;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.3);
}
</style>