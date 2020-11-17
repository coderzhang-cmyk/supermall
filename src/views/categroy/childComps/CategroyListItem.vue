<template>
<div class="categroy-list-item">
  <a :href="item.link">
    <img :src="item.image" alt="" @load="handleListImg">
    <span>{{ item.title }}</span>
  </a>
  </div>  
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  methods: {
    handleListImg() {
      this.$bus.$emit('handleListImg')
    }
  }
}
</script>

<style scoped>
.categroy-list-item {
  width: 81px;
  margin-right: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 13px;
  color: #666666;
}
.categroy-list-item img {
  width: 80%;
}
.categroy-list-item span {
  display: block;
  margin-top: 15px;
}
</style>