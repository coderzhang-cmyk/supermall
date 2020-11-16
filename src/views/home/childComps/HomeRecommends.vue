<template>
  <div class="home-recommends">
    <div
      class="home-recommends-items"
      v-for="item in recommends"
      :key="item.title"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>
          {{ item.title }}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.home-recommends {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eeeeee;
  text-align: center;
  font-size: 14px;
}
.home-recommends-items {
  flex: 1;
}
.home-recommends-items img {
  height: 70px;
  width: 70px;
  margin-bottom: 5px;
}
.home-recommends-items span {
  display: block;
}
</style>