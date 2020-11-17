<template>
  <div class="goods-list-item" @click="handleSkipToDetail">
    <img v-lazy="selectImage" alt="" @load="handleGoodsImg" />
    <div class="item-info">
      <p class="title">{{ goodsListItem.title }}</p>
      <span class="price">{{ goodsListItem.price }}</span>
      <span class="cfav">{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectImage() {
      return  this.goodsListItem.img || this.goodsListItem.image || this.goodsListItem.show.img
    }
  },
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handleGoodsImg() {
      this.$bus.$emit('handleGoodsImg')
    },
    handleSkipToDetail() {
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  },
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.item-info {
  margin: 5px 0;
  font-size: 12px;
  text-align: center;
}
.title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.cfav {
  position: relative;
}
.cfav::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  left: -15px;
  width: 13px;
  height: 13px;
  background-image: url("~assets/img/common/collect.svg");
  background-size: cover;
}
</style>