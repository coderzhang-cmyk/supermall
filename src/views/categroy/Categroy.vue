<template>
  <div class="categroy">
    <categroy-nav-bar />
    <div class="categroy-main">
      <categroy-titles
        :titles="titles"
        @handleCategroyTitle="handleCategroyTitle"
      />
      <scroll class="content" ref="scroll">
        <categroy-list :list="list" />
        <tab-control
          :titles="['综合', '新品', '销量']"
          @handleTabControlBtn="handleTabControlBtn"
        />
        <goods-list :goods-list="goods[currentSort]" />
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/betterScroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";

import CategroyNavBar from "./childComps/CategroyNavBar";
import CategroyTitles from "./childComps/CategroyTitles";
import CategroyList from "./childComps/CategroyList";

import {
  getCategroyTitles,
  getSubcategory,
  getCategoryDetail,
} from "network/categroy";

import { debounce } from "common/utils.js";

export default {
  data() {
    return {
      titles: [],
      list: [],
      refreshImg: null,
      goods: {
        pop: [],
        new: [],
        sell: [],
      },
      currentSort: "pop",
    };
  },
  components: {
    Scroll,
    TabControl,
    GoodsList,
    CategroyNavBar,
    CategroyTitles,
    CategroyList,
  },
  created() {
    this.getCategroyTitles();
  },
  mounted() {
    this.refreshImg = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("handleListImg", () => {
      this.refreshImg();
    });
    this.$bus.$on('handleGoodsImg', () => {
      this.refreshImg()
    })
  },
  methods: {
    getCategroyTitles() {
      getCategroyTitles().then((res) => {
        let category = res.data.category;
        this.titles = category.list;
        this.getSubcategory(this.titles[0].maitKey);
        this.getCategoryDetail(this.titles[0].miniWallkey, "pop");
        this.getCategoryDetail(this.titles[0].miniWallkey, "new");
        this.getCategoryDetail(this.titles[0].miniWallkey, "sell");
      });
    },

    getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        this.list = res.data.list;
      });
    },

    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.goods[type] = res;
      });
    },

    handleCategroyTitle(maitKey, miniWallkey) {
      this.list = this.getSubcategory(maitKey);
      this.getCategoryDetail(miniWallkey, 'pop')
      this.getCategoryDetail(miniWallkey, 'new')
      this.getCategoryDetail(miniWallkey, 'sell')
    },

    handleTabControlBtn(index) {
      switch (index) {
        case 0:
          this.currentSort = "pop";
          break;
        case 1:
          this.currentSort = "new";
          break;
        default:
          this.currentSort = "sell";
          break;
      }
    },
  },
};
</script>

<style scoped>
.categroy {
  height: 100vh;
  overflow: hidden;
}
.categroy-main {
  display: flex;
  height: 100%;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
  flex: 1;
}
</style>