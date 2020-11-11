<template>
  <div class="detail-bottom-bar">
    <div class="tab-left">
      <div class="customer-service">
        <i></i>
        <div>客服</div>
      </div>
      <div class="shop">
        <i></i>
        <div>店铺</div>
      </div>
      <div class="collection">
        <i></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="tab-right">
      <div class="join-cart">
        <span>加入购物车</span>
      </div>
      <div class="buy">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.detail-bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  text-align: center;
  background-color: #ffffff;
  z-index: 9;
}
.tab-left {
  display: flex;
  flex: 1;
  justify-content: space-around;
  font-size: 14px;
}
.tab-left i {
  display: block;
  width: 24px;
  height: 24px;
  margin: 3px;
}
.customer-service i {
  background: url("~assets/img/detail/detail_bottom.png") 0 -57px/100%;
}
.shop i {
  background: url("~assets/img/detail/detail_bottom.png") 0 -106px/100%;
}
.collection i {
  background: url("~assets/img/detail/detail_bottom.png") 0 -163px/100%;
}
.tab-right {
  flex: 1;
  display: flex;
}

.join-cart,
.buy {
  flex: 1;
  height: 49px;
  line-height: 49px;
}
.join-cart {
  background-color: #f5b507;
  color: rgb(26, 25, 25);
}
.buy {
  color: #ffffff;
  background-color: rgb(201, 59, 137);
}
</style>