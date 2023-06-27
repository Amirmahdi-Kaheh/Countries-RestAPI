<template>
  <div>
    There is Nothing Paw
  </div>
</template>

<script>
export default {
  name: "index",
  beforeRouteEnter(to, from, next) {
    // Redirect user to homePage
    next('/');
  }
}
</script>

<style scoped>

</style>
