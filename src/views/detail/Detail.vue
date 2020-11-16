<template>
  <div class="detail">
    <detail-nav-bar
      :titles="titles"
      class="detail-nav-bar"
      @handleSkipTitle="handleSkipTitle"
      ref="nav"
    />
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info
        :goodsInfo="goodsInfo"
        @handleDressEffectImg="handleDressEffectImg"
      />
      <detail-params-info :params-info="paramsInfo" ref="params" />
      <detail-user-evaluation
        :user-evaluation="userEvaluation"
        ref="userEvaluation"
      />
      <detail-recommend-info :recommend-info="recommendInfo" ref="recommend" />
    </scroll>
    <transition>
      <back-top @click.native="handleBackTop" v-show="isShow"></back-top>
    </transition>
    <detail-bottom-bar @handleAddCart="handleAddCart" />
  </div>
</template>

<script>
import Scroll from "components/common/betterScroll/Scroll";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailUserEvaluation from "./childComps/DetailUserEvaluation";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import { getDetail, getRecommend, GoodsInfo, ShopInfo } from "network/detail";

import { debounce } from "common/utils";
import { refreshMixin, backTopMixin } from "common/mixin";

import { mapActions } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIid: "",
      topImages: [],
      goods: {},
      shopInfo: {},
      goodsInfo: {},
      paramsInfo: {},
      userEvaluation: {},
      recommendInfo: [],
      cancelFunction: null,
      positionY: [],
      JumpToSpecifiedLocation: null,
      scrollY: 0,
      currentIndex: 0,
      message: "",
      show: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailUserEvaluation,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
  },
  computed: {},
  mixins: [refreshMixin, backTopMixin],
  created() {
    this.currentIid = this.$route.params.iid;
    this.getDetail(this.currentIid);
    this.getRecommend();
    this.JumpToSpecifiedLocation = debounce(() => {
      this.positionY = [];
      this.positionY.push(0);
      this.positionY.push(this.$refs.params.$el.offsetTop);
      this.positionY.push(this.$refs.userEvaluation.$el.offsetTop);
      this.positionY.push(this.$refs.recommend.$el.offsetTop);
    });
  },
  mounted() {
    // 这里拿不到的原因在于给模板设置了必须得数据里面有值并且已经成功传递过去的时候才会渲染dom,很有可能数据还没有
    //中还没有值,所以模板还没有渲染
  },
  destroyed() {
    this.$bus.$off("handleGoodsImg", this.cancelFunction);
  },
  methods: {
    ...mapActions({
      handleAddCartActions: "handleAddCart",
    }),
    getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo);
        this.shopInfo = new ShopInfo(data.shopInfo);
        this.goodsInfo = data.detailInfo;
        this.paramsInfo = data.itemParams;
        this.userEvaluation = data.rate.list[0];
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommendInfo = res.data.list;
      });
    },
    handleDressEffectImg() {
      // refresh属性放在mixin.js文件中,一些公共的代码可以放入其中
      this.refresh();
      this.JumpToSpecifiedLocation();
    },
    handleSkipTitle(index) {
      this.$refs.scroll.scrollTo(0, -this.positionY[index], 600);
    },
    scroll(position) {
      this.scrollY = -position.y;
      this.isShow = position.y < -1000;
      //  0-3000 0
      //  3000-6000 1
      //  6000-9000 2
      //  9000-     3
      for (const key in this.positionY) {
        let index = Number(key);
        if (
          this.currentIndex !== index &&
          ((index < this.positionY.length - 1 &&
            this.scrollY >= this.positionY[index] &&
            this.scrollY < this.positionY[index + 1]) ||
            (index === this.positionY.length - 1 &&
              this.scrollY >= this.positionY[index]))
        ) {
          this.currentIndex = index;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    handleAddCart() {
      let commodityInformation = {};
      commodityInformation.iid = this.currentIid;
      commodityInformation.img = this.topImages[0];
      commodityInformation.price = this.goods.oldPrice;
      commodityInformation.desc = this.goodsInfo.desc;
      commodityInformation.title = this.goods.title;
      this.handleAddCartActions(commodityInformation).then((res) => {
        this.$toast.show(res, 2000)
      });
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 1;
  background-color: #ffffff;
}
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