<template>
<div>
  <h2>
    我是分类
  </h2>
  <div class="wrapper">
    <ul class="content">
      <button @click="hahaha">haha</button>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
    </ul>
  </div>
  </div> 
</template>

<script>

import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
  this.scroll =  new BScroll('.wrapper', {
    probeType: 3,
    click: true,
    pullUpLoad: true
    })
     this.scroll.on('scroll', (position) => {
      //  console.log(position);
    })
    this.scroll.on('pullingUp', () => {
      console.log('q');
      this.scroll.finishPullUp()
    })
  },
  methods: {
   hahaha() {
     console.log('wq');
   }
  },
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: yellowgreen;
}
</style>