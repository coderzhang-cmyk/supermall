<template>
  <div class="profile-personal">
    <div class="profile-personal-user">
      <img src="~assets/img/profile/avatar.svg" alt="" />
      <div class="bind">
        <div>登录/注册</div>
        <div class="phone">暂无绑定手机号</div>
      </div>
      <div class="right-arrow"></div>
    </div>
    <div class="profile-personal-info">
      <div class="balance">
        <strong class="zero">{{ num | numToFixed }}</strong
        >元
        <span>我的余额</span>
      </div>
      <div class="discount">
        <strong class="zero">{{ num }}</strong
        >个
        <span>我的优惠</span>
      </div>
      <div class="integral">
        <strong class="zero">{{ num }}</strong
        >分
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  filters: {
    numToFixed(num) {
      return Number(num).toFixed(2);
    },
  },
};
</script>

<style scoped>
.profile-personal-user {
  display: flex;
  position: relative;
  top: -1px;
  padding: 20px 10px;
  background-color: var(--color-tint);
  align-items: center;
  color: #ffffff;
  font-size: 16px;
}
.profile-personal-user img {
  width: 60px;
}
.bind {
  flex: 1;
  margin-left: 5px;
}
.phone {
  position: relative;
  margin-top: 6px;
  margin-left: 15px;
  color: #dfdfdf;
  font-size: 12px;
  font-weight: 900;
}
.phone::before {
  content: "";
  position: absolute;
  top: 0;
  left: -17px;
  width: 16px;
  height: 16px;
  background-image: url("~assets/img/profile/phone.svg");
  background-size: 100% 100%;
}
.right-arrow {
  width: 6px;
  height: 6px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  transform: rotate(135deg);
}
.profile-personal-info {
  display: flex;
  text-align: center;
  border-bottom: 10px solid #eeeeee;
  font-size: 13px;
}
.balance,
.discount,
.integral {
  flex: 1;
  padding: 20px 0;
}
.balance,
.discount {
  border-right: 2px solid #eeeeee;
}
.profile-personal-info span {
  display: block;
  margin-top: 5px;
}
.zero {
  color: rgb(255, 116, 51);
  font-size: 20px;
}
</style>