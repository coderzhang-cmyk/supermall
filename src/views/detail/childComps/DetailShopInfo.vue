<template>
  <div class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-name">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.shopName }}</span>
    </div>
    <div class="shop-base">
      <div class="shop-base-left">
        <div class="shop-base-left-cSells">
          <div>{{ cSells }}</div>
          <div class="text">总销量</div>
        </div>
        <div class="shop-base-left-cGoods">
          <div>{{ shopInfo.cGoods }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-base-right">
        <div v-for="item in shopInfo.score" class="grade">
          <span class="grade-name">{{ item.name }}</span>
          <span
            class="grade-score"
            :style="{
              color: item.isBetter
                ? 'var(--color-high-text)'
                : 'rgb(3, 184, 48)',
            }"
            >{{ item.score }}</span
          >
          <span :class="{ pink: item.isBetter }" class="grade-compare">
            {{ item.isBetter ? " 高" : "低" }}
          </span>
        </div>
      </div>
    </div>
    <div class="enter-shop">
      <span @click="handleEnterShop">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    cSells() {
      return (this.shopInfo.cSells / 10000).toFixed(1) + "万";
    },
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handleEnterShop() {
      Location.href = this.shopInfo.shopUrl;
    },
  },
};
</script>

<style scoped>
.detail-shop-info {
  padding: 8px;
  border-bottom: 10px solid #eeeeee;
}
.shop-name {
  margin: 20px 0;
}
.shop-name img {
  width: 50px;
  margin-right: 10px;
  vertical-align: middle;
}
.shop-base {
  display: flex;
  justify-content: space-evenly;
}
.shop-base-left {
  display: flex;
  align-items: center;
  border-right: 3px solid #ccc;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: rgb(58, 58, 58);
}
.shop-base-left-cSells,
.shop-base-left-cGoods {
  margin-right: 20px;
}
.text {
  margin-top: 5px;
}
.grade {
  margin: 10px 0;
}
.grade .grade-score {
  display: inline-block;
  width: 35px;
  margin-left: 8px;
}
.pink {
  background-color: var(--color-high-text) !important;
}
.grade-compare {
  display: inline-block;
  text-align: center;
  padding: 2px;
  background-color: rgb(3, 184, 48);
  color: #ffffff;
}
.enter-shop {
  margin: 25px 0;
  text-align: center;
}
.enter-shop span {
  border-radius: 5px;
  padding: 10px 50px;
  background-color: #eee;
}
</style>