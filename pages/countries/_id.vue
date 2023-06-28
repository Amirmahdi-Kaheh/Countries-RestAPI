<template>
  <div>
    <!--  HEAD START  -->
    <div class="flex items-center">
      <nuxt-link to="/" class="flex items-center gap-4 text-gray dark:text-gray-dark">
        <div class="p-2 rounded-xl bg-white dark:bg-white-dark">
          <arrow-icon />
        </div>

        <p>Back To Home</p>
      </nuxt-link>
    </div>
    <!--  HEAD END  -->

    <!--  BODY START  -->
    <div class="grid grid-cols-12 items-start sm:gap-10 gap-y-10 mt-10">
      <div class="sm:col-span-5 col-span-12 sm:sticky top-36">
        <v-lazy-image class="country-flag" :src="countryData.flags.svg" :alt="countryData.flags.alt" />

        <div class="grid grid-cols-2 gap-4 mt-4">
          <a :href="countryData.maps.openStreetMaps" target="_blank" class="flex items-center justify-center gap-2 p-4 bg-silver dark:bg-silver-dark text-gray dark:text-gray-dark rounded-xl">OpenStreet Map</a>
          <a :href="countryData.maps.googleMaps" target="_blank" class="flex items-center justify-center gap-2 p-4 bg-silver dark:bg-silver-dark text-gray dark:text-gray-dark rounded-xl">Google Map</a>
        </div>
      </div>

      <div class="sm:col-span-7 col-span-12">
        <h1 class="text-3xl font-bold">{{countryData.name.common}}</h1>
        <p class="text-xl text-gray dark:text-gray-dark">{{countryData.name.official}}</p>

        <!--    #INFORMATION START    -->
        <pages-country-info :data="countryData" />
        <!--    #INFORMATION END    -->

        <!--   #BORDERS START     -->
        <pages-country-borders :data="countryBorders" />
        <!--   #BORDERS END     -->


        <!--   #TRANSLATION  START  -->
        <pages-country-translations :data="countryData.translations" />
        <!--   #TRANSLATION  END  -->
      </div>
    </div>
    <!--  BODY END  -->
  </div>
</template>

<script>
import ArrowIcon from "~/components/global/icons/arrow-icon";
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "_id",
  components: {ArrowIcon, VLazyImage},
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

      if(countryAllData.data.borders.length > 0){
        const bordersList = countryAllData.data.borders.join(",").toLowerCase()
        const countryBorderData = await app.$axios.get(`/v3.1/alpha?codes=${bordersList}&fields=name,cca3,flags`)

        return  {
          countryBorders: countryBorderData.data,
          countryData: countryAllData.data,
        }
      }else {
        return  {
          countryBorders: null,
          countryData: countryAllData.data,
        }
      }
    } catch (err) {
      throw err
    }
  }
}
</script>

<style scoped>

</style>
