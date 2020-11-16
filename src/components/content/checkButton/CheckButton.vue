<template>
  <div class="check-button" :class="{active: isActive }" @click="handleCheckBtn">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
   methods: {
      handleCheckBtn() {
        this.$emit('handleCheckBtn')
        
      }
    },
}
</script>

<style scoped>
.check-button {
  display: flex;
  width: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #cccccc;
  background-color: #fff;
}
.active {
background-color: var(--color-high-text);
border-color: var(--color-high-text);
}
</style>