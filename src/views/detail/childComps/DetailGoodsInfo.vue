<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="new-models">
      <p class="top-line">
        <span class="top-line-block"></span>
        <span class="top-line-border"></span>
      </p>
      <div class="desc">
        {{ goodsInfo.desc }}
      </div>
      <p class="bottom-line">
        <span class="bottom-line-border"></span>
        <span class="bottom-line-block"></span>
      </p>
    </div>
    <div class="dress-effect">
      <p>
        {{ goodsInfo.detailImage[0].key }}
      </p>
      <div v-for="item in goodsInfo.detailImage[0].list">
        <img :src="item" alt="" class="dress-effect-img" @load="handleDressEffectImg">
      </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
      methods: {
      handleDressEffectImg() {
        this.$emit('handleDressEffectImg')
      }
    },
};
</script>

<style scoped>
.detail-goods-info {
  padding: 0 8px;
}
.new-models {
  padding: 8px;
}
.top-line-block {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: rgb(58, 58, 58);
}
.top-line-border {
  display: inline-block;
  width: 30%;
  height: 3px;
  background-color: #cccccc;
}
.desc {
  margin: 10px 0;
}
.bottom-line {
  width: 100%;
  text-align: right;
}
.bottom-line-block {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: rgb(58, 58, 58);
}
.bottom-line-border {
  display: inline-block;
  width: 30%;
  height: 3px;
  background-color: #cccccc;
}
.dress-effect p {
  margin-bottom: 20px;
}
.dress-effect-img {
  width: 100%;
}
</style>