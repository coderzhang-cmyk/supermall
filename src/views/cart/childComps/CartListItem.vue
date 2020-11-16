<template>
  <div class="cart-list-item">
    <check-button
      class="item-check-button"
      :isActive="commodityItem.checked"
      @handleCheckBtn="handleCheckBtn"
    />
    <div class="item-img">
      <img :src="commodityItem.img" alt="" />
    </div>
    <div class="item-info">
      <h4>{{ commodityItem.title }}</h4>
      <p>{{ commodityItem.desc }}</p>
      <div class="item-info-bottom">
        <span>{{ commodityItem.price }}</span>
        <span>x{{ commodityItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

import { REVISE_CHECKED } from "store/mutations.type";
export default {
  components: { CheckButton },
  props: {
    commodityItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["commodity"]),
  },
  methods: {
    handleCheckBtn() {
      // 通过mutations来修改checked属性
      let payload = {
        iid: this.commodityItem.iid,
        checked: !this.commodityItem.checked,
      };
      this.$store.commit(REVISE_CHECKED, payload);
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  align-items: center;
}
.item-check-button {
  margin-right: 10px;
}
.item-img {
  margin-right: 10px;
}
.item-img img {
  width: 60px;
  border-radius: 5px;
}
.item-info {
  overflow: hidden;
}
.item-info h4,
.item-info p {
  margin-bottom: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info-bottom {
  display: flex;
  justify-content: space-between;
}
.item-info-bottom span:first-child {
  color: rgb(255, 102, 0);
}
</style>