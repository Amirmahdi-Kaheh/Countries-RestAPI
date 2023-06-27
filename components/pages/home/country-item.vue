<template>
  <nuxt-link :to="`/countries/${data.cca3.toLowerCase()}`" class="col-span-3 relative group flex flex-col justify-between rounded-xl overflow-hidden p-6 transition-all">
    <div class="absolute right-0 bottom-0 w-full h-3/4 bg-white dark:bg-white-dark rounded-xl -z-10 group-hover:h-full transition-all"></div>
    <div>
      <img class="country-flag" :src="data.flags.svg"  :alt="data.flags.alt" loading="lazy">

      <!--   #COUNTRY NAME   -->
      <div class="mt-4">
        <h4 class="text-lg font-semibold">{{data.name.common}}</h4>
        <p class="text-sm text-gray dark:text-gray-dark w-full truncate" :title="data.name.official">{{data.name.official}}</p>
      </div>
    </div>

    <div class="flex flex-col gap-1 mt-4 text-sm">
      <!--   #POPULATION   -->
      <div>
        <b>Population: </b>
        <span>{{data.population.toLocaleString()}}</span>
      </div>

      <!--   #REGION   -->
      <div>
        <b>Region: </b>
        <span>{{data.region}}</span>
      </div>

      <!--   #CAPITAL   -->
      <div v-if="data.capital">
        <b>Capital: </b>
        <span v-for="capital in data.capital">{{capital}}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "country-item",
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
