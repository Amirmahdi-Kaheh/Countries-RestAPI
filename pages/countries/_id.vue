<template>
  <div>
    <!--  HEAD START  -->
    <div class="flex items-center">
      <nuxt-link to="/" class="flex items-center gap-4 text-gray">
        <div class="p-2 rounded-full bg-white">
          <arrow-icon />
        </div>

        <p>Back To Home</p>
      </nuxt-link>
    </div>
    <!--  HEAD END  -->

    <!--  BODY START  -->
    <div class="grid grid-cols-12 items-start gap-10 mt-10">
      <div class="col-span-5 sticky top-36">
        <img class="w-full aspect-[3/2] object-cover rounded-xl border border-silver" :src="countryData.flags.png" :alt="countryData.flags.alt" loading="lazy">

        <div class="grid grid-cols-2 gap-4 mt-4">
          <a :href="countryData.maps.openStreetMaps" target="_blank" class="flex items-center justify-center gap-2 p-4 bg-silver text-gray rounded-xl">OpenStreet Map</a>
          <a :href="countryData.maps.googleMaps" target="_blank" class="flex items-center justify-center gap-2 p-4 bg-silver text-gray rounded-xl">Google Map</a>
        </div>
      </div>

      <div class="col-span-7">
        <h1 class="text-3xl font-bold">{{countryData.name.common}}</h1>
        <p class="text-xl text-gray">{{countryData.name.official}}</p>

        <!--    #INFORMATION START    -->
        <div class="grid grid-cols-2 gap-2 mt-10">
          <!--   #NATIVE NAME   -->
          <div>
            <b>Native Name: </b>
            <span class="text-gray">{{Object.values(countryData.name.nativeName)[0].common}}</span>
          </div>

          <!--   #TOP LEVEL DOMAIN (tld)   -->
          <div v-if="countryData.tld.length > 0">
            <b>Top Level Domain: </b>
            <span class="text-gray">{{countryData.tld[0]}}</span>
          </div>

          <!--   #POPULATION   -->
          <div>
            <b>Population: </b>
            <span class="text-gray">{{countryData.population.toLocaleString()}}</span>
          </div>

          <!--   #CURRENCY   -->
          <div>
            <b>Currency: </b>
            <span class="text-gray">
              {{Object.values(countryData.currencies)[0].name}}
              <span class="px-3 py-1 bg-silver rounded-md">{{Object.values(countryData.currencies)[0].symbol}}</span>
            </span>
          </div>

          <!--   #REGION   -->
          <div>
            <b>Region: </b>
            <span class="text-gray">{{countryData.region}}</span>
          </div>

          <!--   #LANGUAGES   -->
          <div>
            <b>Languages: </b>
            <span class="text-gray" v-for="(lang, index) in countryData.languages" :key="index">
              {{lang}}
              <span v-show="">{{ index }}</span>
            </span>
          </div>

          <!--   #SUBREGION   -->
          <div>
            <b>Sub Region: </b>
            <span class="text-gray">{{countryData.subregion}}</span>
          </div>

          <!--   #CAPITAL   -->
          <div v-if="countryData.capital.length > 0">
            <b>Capital: </b>
            <span class="text-gray">{{countryData.capital[0]}}</span>
          </div>
        </div>
        <!--    #INFORMATION END    -->

        <!--   #BORDERS START     -->
        <div class="my-10">
          <h4 class="text-lg font-semibold mb-2">Borders</h4>
          <div class="flex flex-wrap gap-2">
            <nuxt-link v-for="(border, index) in countryData.borders" :key="border" :to="border" class="px-6 py-2.5 rounded-xl text-gray border-2 border-silver">{{border}}</nuxt-link>
          </div>
        </div>
        <!--   #BORDERS END     -->


        <!--   #TRANSLATION  START  -->
        <div>
          <h4 class="text-lg font-semibold mb-2">In Other Languages</h4>

          <div class="border-2 border-silver rounded-xl">
            <div class="grid grid-cols-12 bg-silver">
              <div class="p-4 col-span-2">Name</div>
              <div class="p-4 col-span-4">Common</div>
              <div class="p-4 col-span-6">Official</div>
            </div>

            <div v-for="(trans, index) in countryData.translations" :key="index" class="grid grid-cols-12 text-gray p-4 border-b border-silver last:border-none">
              <div class="col-span-2 uppercase">{{index}}</div>
              <div class="col-span-4">{{trans.common}}</div>
              <div class="col-span-6">{{ trans.official }}</div>
            </div>
          </div>
        </div>
        <!--   #TRANSLATION  END  -->
      </div>
    </div>
    <!--  BODY END  -->
  </div>
</template>

<script>
import ArrowIcon from "~/components/global/icons/arrow-icon";
export default {
  name: "_id",
  components: {ArrowIcon},
  head () {
    return {
      title: 'We Are in ' + this.countryData.name.common
    }
  },
  async asyncData ({ app, params,store, error }) {
    try {
      const [
        countryAllData
      ] = await Promise.all([
        app.$axios.get(`/v3.1/alpha/${params.id}?fields=name,capital,borders,population,region,subregion,tld,currencies,languages,flags,translations,maps`)
      ]);

      return {
        countryData: countryAllData.data
      };
    } catch (err) {
      throw err
    }
  }
}
</script>

<style scoped>

</style>
