<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="handleSwiperImg" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    handleSwiperImg() {
      if (!this.isLoad) {
        this.$emit("handleSwiperImg");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
</style>