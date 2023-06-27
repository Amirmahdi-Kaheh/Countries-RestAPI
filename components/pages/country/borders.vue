<template>
  <div class="my-10">
    <h4 class="text-lg font-semibold mb-2">Borders Countries</h4>
    <h4 v-show="!data" class="text-sm text-yellow font-semibold mb-2 text-">this Country has no Border with any country!</h4>
    <div v-if="data" class="flex flex-wrap gap-2">
      <nuxt-link v-for="(border, index) in data" :key="index" :to="`/countries/${border.cca3.toLowerCase()}`" class="flex items-center gap-2 p-2.5 rounded-xl text-gray border-2 border-silver">
        <img :src="border.flags.svg" :alt="border.flags.alt" class="country-flag-icon">
        {{border.name.common}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "borders",
  props: {
    data: {
      default: null,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
