<template>
  <div class="profile-order-list">
    <div class="profile-order-list-info icon">
      <span>我的消息</span>
    </div>
    <div class="profile-order-list-shop icon">
      <span>积分商城</span>
    </div>
    <div class="profile-order-list-member icon">
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-order-list {
  padding-left: 30px;
  border-bottom: 10px solid #eeeeee;
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
.profile-order-list-info::before {
  background-image: url("~assets/img/profile/message.svg");
}
.profile-order-list-shop::before {
  background-image: url("~assets/img/profile/shopping.svg");
}
.profile-order-list-member::before {
  background-image: url("~assets/img/profile/vip.svg");
}
.profile-order-list-member {
  border: 0;
}
</style>