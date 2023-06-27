<template>
  <div :class="userDefaultTheme">
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
import {mapGetters} from "vuex";
export default {
  name: "default",
  components: {TheFooter, TheHeader},
  head(){
    return{
      htmlAttrs:{
        class: this.userDefaultTheme
      },
    }
  },
  computed: {
    ...mapGetters('theme', ['userDefaultTheme']),
  }
}
</script>

<style scoped>

</style>
