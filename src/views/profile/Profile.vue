<template>
  <div class="profile">
    <profile-nav-bar />
    <profile-personal />
    <profile-order-list />
    <profile-service-list />
  </div>
</template>

<script>
import ProfileNavBar from "./childComps/ProfileNavBar";
import ProfilePersonal from './childComps/ProfilePersonal'
import ProfileOrderList from './childComps/ProfileOrderList'
import ProfileServiceList from './childComps/ProfileServiceList'

export default {
  components: {
    ProfileNavBar,
    ProfilePersonal,
    ProfileOrderList,
    ProfileServiceList
  },
};
</script>

<style scoped>
</style>