<template>
  <nuxt-link :to="`/countries/${data.cca3.toLowerCase()}`" class="lg:col-span-3 sm:col-span-6 col-span-12 relative group flex flex-col justify-between rounded-xl overflow-hidden p-6 transition-all">
    <div class="absolute right-0 bottom-0 w-full h-3/4 bg-white dark:bg-white-dark rounded-xl -z-10 group-hover:h-full transition-all"></div>
    <div>
      <v-lazy-image class="country-flag" :src="data.flags.svg" :alt="data.flags.alt" />

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
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "country-item",
  components: {VLazyImage},
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
