<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精品']"
      @handleTabControlBtn="handleTabControlBtn"
      ref="tabControl1"
      class="tab-control"
      v-show="isStay"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scroll"
      :pull-up-load="true"
      @pullingUp="pullingUp"
    >
      <home-swiper
        :banners="banners"
        @handleSwiperImg="handleSwiperImg"
      ></home-swiper>
      <home-recommends :recommends="recommends"></home-recommends>
      <home-feature-view></home-feature-view>
      <tab-control
        :titles="['流行', '新款', '精品']"
        @handleTabControlBtn="handleTabControlBtn"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods-list="goods[currentSort].list"></goods-list>
    </scroll>
    <transition>
      <back-top @click.native="handleBackTop" v-show="isShow"></back-top>
    </transition>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/betterScroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";


import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommends from "./childComps/HomeRecommends";
import HomeFeatureView from "./childComps/HomeFeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { refreshMixin, backTopMixin } from "common/mixin";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentSort: "pop",
      isStay: false,
      tabOffseTop: 0,
      scrollY: 0,
      cancelFunction: null,
    };
  },
  mixins: [refreshMixin, backTopMixin],
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scroll.y;
    this.$bus.$off("handleGoodsImg", this.cancelFunction);
  },
  methods: {
    // 普通方法
    handleTabControlBtn(index) {
      switch (index) {
        case 0:
          this.currentSort = "pop";
          break;
        case 1:
          this.currentSort = "new";
          break;
        case 2:
          this.currentSort = "sell";
          break;
        default:
          break;
      }

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    scroll(position) {
      this.isShow = position.y < -1000;
      this.isStay = position.y < -this.tabOffseTop;
    },
    pullingUp() {
      this.getHomeGoods(this.currentSort);
    },
    handleSwiperImg() {
      this.tabOffseTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommends,
    HomeFeatureView,
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--color-high-text);
  color: #ffffff;
  z-index: 1;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
/* 动画之前与动画之后的状态 */
.v-enter,
.v-leave-to {
  opacity: 0;
}
/* 动画过程中的状态 */
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
</style>