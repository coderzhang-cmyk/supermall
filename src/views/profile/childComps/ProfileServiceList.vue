<template>
  <div class="profile-service-list">
    <div class="profile-service-list-cart icon">
      <span>我的购物车</span>
    </div>
    <div class="profile-service-list-app icon">
      <span>下载购物车</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-service-list {
  padding-left: 30px;
  font-size: 14px;
}
.icon {
  position: relative;
  padding: 15px;
  border-bottom: 2px solid #eeeeee;
}
.icon::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -12px;
  width: 20px;
  height: 20px;
  margin: auto 0;
  background-size: 100% 100%;
}
.profile-service-list-cart::before {
  background-image: url("~assets/img/profile/cart.svg");
}
.profile-service-list-app::before {
  background-image: url("~assets/img/profile/pointer.svg");
}
.profile-service-list div:nth-last-child(1) {
  border: 0;
}

</style>