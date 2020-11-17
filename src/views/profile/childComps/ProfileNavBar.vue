<template>
<div class="profile-nav-bar">
  <nav-bar>
    <div slot="center">
      coderyZhang-cmyk
    </div>
  </nav-bar>
  </div>  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
components: {
  NavBar
}
}
</script>

<style scoped>
.profile-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>