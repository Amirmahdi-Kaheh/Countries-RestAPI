<template>
  <div>
    <h4 class="text-lg font-semibold mb-2">In Other Languages</h4>

    <div class="border-2 border-silver dark:border-silver-dark rounded-xl">
      <div class="grid grid-cols-12 bg-silver dark:bg-silver-dark">
        <div class="p-4 sm:col-span-2 col-span-4">Name</div>
        <div class="p-4 sm:col-span-4 col-span-8">Common</div>
        <div class="p-4 col-span-6 hidden sm:block">Official</div>
      </div>

      <div v-for="(trans, index) in data" :key="index" class="grid grid-cols-12 text-gray dark:text-gray-dark p-4 border-b border-silver dark:border-silver-dark last:border-none">
        <div class="sm:col-span-2 col-span-4 uppercase">{{index}}</div>
        <div class="sm:col-span-4 col-span-8">{{trans.common}}</div>
        <div class="col-span-6 hidden sm:block">{{ trans.official }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "translations",
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
