<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
      {{ goods.title }}
    </div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span
        class="discountDesc"
        :style="{ backgroundColor: goods.discountBgColor }"
        >{{ goods.discountDesc }}</span
      >
    </div>
    <div class="info-columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <div v-for="index in goods.services.length - 2">
        <img :src="goods.services[index].icon" alt="" />
        <span>{{ goods.services[index].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-base-info {
  padding: 8px;
  border-bottom: 10px solid #eeeeee;
}
.info-title {
  /* text-indent: 10px; */
  font-size: 18px;
  font-weight: 700;
  color: rgb(58, 58, 58);
}
.info-price {
  margin: 15px 0 20px 0;
}
.info-price .new-price {
  color: var(--color-high-text);
  font-size: 20px;
  font-weight: 700;
}
.info-price .old-price {
  margin: 0 10px;
  text-decoration: line-through;
}
.info-price .discountDesc {
  padding: 5px;
  border-radius: 10px;
  font-size: 14px;
  color: var(--color-background);
}
.info-columns {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
}
.info-services {
  display: flex;
  justify-content: space-between;
  margin: 25px 0 20px 0;
}
.info-services img {
  width: 15px;
  vertical-align: middle;
}
</style>