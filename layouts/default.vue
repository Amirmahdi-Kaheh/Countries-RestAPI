<template>
  <div>
    <TheHeader/>

    <div class="container my-10">
      <nuxt />
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/layouts/TheHeader";
import TheFooter from "~/components/layouts/TheFooter";
export default {
  name: "default",
  components: {TheFooter, TheHeader}
}
</script>

<style scoped>

</style>
