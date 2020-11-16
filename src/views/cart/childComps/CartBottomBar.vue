<template>
  <div class="cart-bottom-bar">
    <div class="select" @click="handleSelectBtn">
      <check-button class="bar-check-button" :isActive="isActive" />
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计：¥{{ totalPrice }}</span>
    </div>
    <div class="reckon" @click="toCalculate">
      <span>去计算({{ calculate }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

import { FOLLOW_SELECT } from "store/mutations.type";
export default {
  data() {
    return {
      active: true,
    };
  },
  computed: {
    ...mapGetters(["commodityLength", "commodity"]),
    totalPrice() {
      return this.commodity
        .filter((item) => {
          return item.checked;
        })
        .reduce((pre, item) => {
          return (
            pre + (item.price && Number(item.price.split("¥")[1])) * item.count
          );
        }, 0)
        .toFixed(2);
    },
    calculate() {
      let count = 0;
      this.commodity
        .filter((item) => {
          return item.checked;
        })
        .reduce((pre, item) => {
          count += item.count;
        }, 0);
      return count;
    },
    isActive() {
      if (!this.commodity.length) return false;
      return !this.commodity.filter((item) => {
        return !item.checked;
      }).length;
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    handleSelectBtn() {
      let isSelectAll = this.commodity.find((item) => {
        return !item.checked;
      });
      this.$store.commit(FOLLOW_SELECT, Boolean(isSelectAll));
    },
    toCalculate() {
      let isSelectAll = this.commodity.every((item) => {
        return !item.checked;
      });
      if(isSelectAll) return this.$toast.show('请选择商品') 
    }
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  display: flex;
  height: 40px;
  background-color: #eee;
  font-size: 14px;
  align-items: center;
}
.select {
  display: flex;
  flex: 0.3;
  height: 20px;
  line-height: 20px;
  margin-left: 5px;
}
.bar-check-button {
  margin: 0 5px;
}
.total {
  flex: 0.4;
}
.reckon {
  flex: 0.3;
  padding: 10px 0;
  text-align: center;
  background-color: var(--color-high-text);
  color: #eeeeee;
}
</style>