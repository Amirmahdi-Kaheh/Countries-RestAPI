<template>
  <div>
    <!--  HEAD START  -->
    <div class="flex items-center">
      <nuxt-link to="/" class="flex items-center gap-4 text-gray">
        <div class="p-2 rounded-xl bg-white">
          <arrow-icon />
        </div>

        <p>Back To Home</p>
      </nuxt-link>
    </div>
    <!--  HEAD END  -->

    <!--  BODY START  -->
    <div class="grid grid-cols-12 items-start gap-10 mt-10">
      <div class="col-span-5 sticky top-36">
        <img class="w-full aspect-[3/2] object-cover rounded-xl border border-silver" :src="countryData.flags.svg" :alt="countryData.flags.alt" loading="lazy">

        <div class="grid grid-cols-2 gap-4 mt-4">
          <a :href="countryData.maps.openStreetMaps" target="_blank" class="flex items-center justify-center gap-2 p-4 bg-silver text-gray rounded-xl">OpenStreet Map</a>
          <a :href="countryData.maps.googleMaps" target="_blank" class="flex items-center justify-center gap-2 p-4 bg-silver text-gray rounded-xl">Google Map</a>
        </div>
      </div>

      <div class="col-span-7">
        <h1 class="text-3xl font-bold">{{countryData.name.common}}</h1>
        <p class="text-xl text-gray">{{countryData.name.official}}</p>

        <!--    #INFORMATION START    -->
        <pages-country-info :data="countryData" />
        <!--    #INFORMATION END    -->

        <!--   #BORDERS START     -->
        <pages-country-borders :data="countryData.borders" />
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
