<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="detail-nav-bar-left" @click="handleBackHome">
      <div class="detail-nav-bar-left-div"></div>
    </div>
    <div slot="center" class="detail-nav-bar-center">
      <div
        v-for="(item, index) in titles"
        :key="item"
        class="nav-bar-item"
        :class="{ active: currentIndex === index }"
        @click="handleSkipTitle(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

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
    NavBar,
  },
  methods: {
    handleBackHome() {
      this.$router.go(-1);
    },
    handleSkipTitle(index) {
      this.currentIndex = index;
      this.$emit("handleSkipTitle", index);
    },
  },
};
</script>

<style scoped>
.detail-nav-bar-left {
  position: relative;
  height: 100%;
}
.detail-nav-bar-left-div {
  /* 手动绘制返回标识,并且居中显示 */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-top: 1px solid #666;
  border-left: 1px solid #666;
  transform: rotate(-45deg);
  margin: auto;
}
.detail-nav-bar-center {
  display: flex;
  font-size: 12px;
}
.nav-bar-item {
  flex-grow: 1;
}
.active {
  color: var(--color-high-text);
}
</style>