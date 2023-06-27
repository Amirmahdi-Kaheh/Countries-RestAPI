<template>
  <div class="col-span-3 flex flex-col justify-between rounded-xl overflow-hidden p-4 bg-white transition-all">
    <div>
      <img class="w-full aspect-[3/2] object-cover rounded-xl border border-silver" :src="data.flags.png" alt="" loading="lazy">

      <!--   #COUNTRY NAME   -->
      <div class="mt-4">
        <h4 class="text-lg font-semibold">{{data.name.common}}</h4>
        <p class="text-sm text-gray w-full truncate" :title="data.name.official">{{data.name.official}}</p>
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
      <div>
        <b>Capital: </b>
        <span v-for="capital in data.capital">{{capital}}</span>
      </div>
    </div>
  </div>
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
