<template>
  <div class="categroy">
    <categroy-nav-bar />
    <div class="categroy-main">
      <categroy-titles :titles="titles" />
      <scroll class="content">
        <categroy-list />
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/betterScroll/Scroll";

import CategroyNavBar from "./childComps/CategroyNavBar";
import CategroyTitles from "./childComps/CategroyTitles";
import CategroyList from "./childComps/CategroyList";

import { getCategroyTitles, getSubcategory } from "network/categroy";

export default {
  data() {
    return {
      titles: [],
      maitKey: 0,
    };
  },
  components: {
    Scroll,
    CategroyNavBar,
    CategroyTitles,
    CategroyList,
  },
  created() {
    this.getCategroyTitles();
  },
  methods: {
    getCategroyTitles() {
      getCategroyTitles().then((res) => {
        let category = res.data.category;
        console.log(category);
        this.titles = category.list;
        this.getSubcategory(this.titles[0].maitKey);
      });
    },
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        console.log(res);
      });
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
}
</style>