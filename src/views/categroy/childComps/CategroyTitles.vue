<template>
    <scroll class="categroy-titles">
    <ul>
      <li
        v-for="(item, index) in titles"
        :key="index"
        class="title"
        :class="{ active: currentIndex === index}"
        @click="handleCategroyTitle(index, item.maitKey, item.miniWallkey)"
      >
        {{ item.title }}
      </li>
    </ul>
    </scroll>
</template>

<script>
import Scroll from "components/common/betterScroll/Scroll";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll
  },
  methods: {
    handleCategroyTitle(index, maitKey, miniWallkey) {
      this.currentIndex = index;
      this.$emit('handleCategroyTitle', maitKey, miniWallkey)
    },
  },
};
</script>

<style scoped>
.categroy-titles {
  width: 100px;
  background-color: #f6f6f6;
  text-align: center;
  font-size: 14px;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.title {
  height: 45px;
  line-height: 45px;
  /* background-color: yellow; */
}
.active {
  border-left: 3px solid var(--color-high-text);
  background-color: #fff;
  color:  var(--color-high-text);
  font-weight: 900;
}
</style>