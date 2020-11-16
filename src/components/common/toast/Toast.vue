<template>
    <div class="toast" v-show="isAcive">
      {{ message }}
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isAcive: false,
    };
  },
  methods: {
    show(message = "默认文字", delayTime = 2000) {
      this.message = message;
      this.isAcive = true;
      setTimeout(() => {
        this.isAcive = false;
        this.message = "";
      }, delayTime);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  z-index: 9;
}
</style>
