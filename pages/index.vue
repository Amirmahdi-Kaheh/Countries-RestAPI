<template>
  <div>
    <div class="flex mb-6 items-center justify-between pb-6 border-b-2 border-b-silver">
      <div class="flex items-center gap-4">
        <countries-search @submit="(value)=> filter.search = value" />
        <button class="p-3.5 rounded-xl bg-white active:scale-90 transition-all" @click="randomChoice">
          <dices-icon />
        </button>
      </div>

      <div>
        <countries-filter />
        <countries-sort />
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
      <country-item v-for="(item, index) in filteredCountry" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import CountryItem from "~/components/pages/home/country-item";
import CountriesSearch from "~/components/pages/home/search-box";
import CountriesFilter from "~/components/pages/home/filter";
import CountriesSort from "~/components/pages/home/sort";
import DicesIcon from "~/components/global/icons/dices-icon";
export default {
  name: 'IndexPage',
  components: {DicesIcon, CountriesSort, CountriesFilter, CountriesSearch, CountryItem},
  async asyncData ({ app, store, error }) {
    try {
      const [
        countriesAllData
      ] = await Promise.all([
        app.$axios.get('/v3.1/all?fields=name,flags,population,region,capital,cca3')
      ]);

      return {
        countries: countriesAllData.data
      };
    } catch (err) {
      throw err
    }
  },
  head () {
    return {
      title: 'Where in the World ?'
    }
  },
  data() {
    return {
      filter: {
        search: ''
      }
    }
  },
  computed:{
    filteredCountry () {
      try {
        return this.countries.filter((country) => {
          return country.name.common.toLowerCase().match(this.filter.search.toLowerCase());
        });
      } catch {
        return this.countries;
      }
    }
  },
  methods: {
    async getAll(){
      this.$axios.get('/v3.1/alpha?codes=IRN').then((response)=>{
        this.response = response.data
      })
    },
    randomChoice() {
      const randomCountry = this.countries[Math.floor(Math.random()*this.countries.length)]
      this.$router.push(`/countries/${randomCountry.cca3}`)
    }
  }
}
</script>
