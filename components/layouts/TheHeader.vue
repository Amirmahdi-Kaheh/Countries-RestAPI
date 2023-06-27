<template>
  <header class="sticky top-0 w-full py-8 bg-white z-30 shadow-2xl shadow-silver">
    <div class="container">
      <nuxt-link to="/" class="flex items-center gap-4 group">
        <img src="~/static/icon.png" class="group-hover:animate-spin" alt="">

        <!--  #WEBSITE TITLE    -->
        <h1 class="text-xl font-semibold">Where in the World ?</h1>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

</style>
