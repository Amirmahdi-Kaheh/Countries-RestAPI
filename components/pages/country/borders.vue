<template>
  <div class="my-10">
    <h4 class="text-lg font-semibold mb-2">Borders</h4>
    <div class="flex flex-wrap gap-2">
      <nuxt-link v-for="(border, index) in data" :key="index" :to="border" class="px-6 py-2.5 rounded-xl text-gray border-2 border-silver">{{border}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "borders",
  props: {
    data: {
      default: null,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
