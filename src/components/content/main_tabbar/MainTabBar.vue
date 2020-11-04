<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tab-bar-img" src="~assets/img/tabbar/home.png" alt="" />
      <img
        slot="tab-bar-img-active"
        src="~assets/img/tabbar/home-active.png"
        alt=""
      />
      <div slot="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categroy">
      <img
        slot="tab-bar-img"
        src="~assets/img/tabbar/categroy.png"
        alt=""
      />
      <img
        slot="tab-bar-img-active"
        src="~assets/img/tabbar/categroy-active.png"
        alt=""
      />
      <div slot="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="tab-bar-img" src="~assets/img/tabbar/cart.png" alt="" />
      <img
        slot="tab-bar-img-active"
        src="~assets/img/tabbar/cart-active.png"
        alt=""
      />
      <div slot="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img
        slot="tab-bar-img"
        src="~assets/img/tabbar/profile.png"
        alt=""
      />
      <img
        slot="tab-bar-img-active"
        src="~assets/img/tabbar/profile-active.png"
        alt=""
      />
      <div slot="tab-bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 1px;
  vertical-align: middle;
}
</style>