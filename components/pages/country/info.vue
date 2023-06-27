<template>
  <div class="grid grid-cols-2 gap-2 mt-10">
    <!--   #NATIVE NAME   -->
    <div v-if="Object.values(data.name.nativeName).length > 0">
      <b>Native Name: </b>
      <span class="text-gray dark:text-gray-dark">{{Object.values(data.name.nativeName)[0].common}}</span>
    </div>

    <!--   #TOP LEVEL DOMAIN (tld)   -->
    <div v-if="data.tld.length > 0">
      <b>Top Level Domain: </b>
      <span class="text-gray dark:text-gray-dark">{{data.tld[0]}}</span>
    </div>

    <!--   #POPULATION   -->
    <div>
      <b>Population: </b>
      <span class="text-gray dark:text-gray-dark">{{data.population.toLocaleString()}}</span>
    </div>

    <!--   #CURRENCY   -->
    <div v-if="Object.values(data.currencies).length > 0">
      <b>Currency: </b>
      <span class="text-gray dark:text-gray-dark">
         {{Object.values(data.currencies)[0].name}}
         <span class="px-3 py-1 bg-silver dark:bg-silver-dark rounded-md">{{Object.values(data.currencies)[0].symbol}}</span>
      </span>
    </div>

    <!--   #REGION   -->
    <div>
      <b>Region: </b>
      <span class="text-gray dark:text-gray-dark">{{data.region}}</span>
    </div>

    <!--   #LANGUAGES   -->
    <div>
      <b>Languages: </b>
      <span class="text-gray dark:text-gray-dark" v-for="(lang, index) in data.languages" :key="index">
              {{lang}}
              <span v-show="">{{ index }}</span>
            </span>
    </div>

    <!--   #SUBREGION   -->
    <div v-if="data.subregion">
      <b>Sub Region: </b>
      <span class="text-gray dark:text-gray-dark">{{data.subregion}}</span>
    </div>

    <!--   #CAPITAL   -->
    <div v-if="data.capital.length > 0">
      <b>Capital: </b>
      <span class="text-gray dark:text-gray-dark">{{data.capital[0]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
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
