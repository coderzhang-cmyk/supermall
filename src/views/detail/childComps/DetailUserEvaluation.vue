<template>
  <div class="detail-user-evaluation">
    <!-- {{userEvaluation}} -->
    <div class="user-evaluation">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user-evaluation-info">
      <div class="user-evaluation-info-img" v-if="userEvaluation.user">
        <img :src="userEvaluation.user.avatar" alt=""/>
        <span>{{ userEvaluation.user.uname }}</span>
      </div>
      <div class="user-evaluation-info-content">
        <p>{{ userEvaluation.content }}</p>
      </div>
      <div class="user-evaluation-info-time">
        <span>{{ userEvaluation.created | formatTime}}</span>
        <span>{{ userEvaluation.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userEvaluation: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    formatTime(time) {
      const date = new Date(time * 1000)
      return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`
    }
  }
};
</script>

<style scoped>
.detail-user-evaluation {
  padding: 20px 15px;
  border-bottom: 10px solid #eeeeee;
  font-size: 14px;
  color: rgb(58, 58, 58);
}
.user-evaluation {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
}
.user-evaluation-info-img {
  margin: 10px 0;
}
.user-evaluation-info-img img {
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
.user-evaluation-info-time {
  margin: 10px 0;
  color: #666666;
}
.user-evaluation-info-time span {
  margin-right: 10px;
}
</style>