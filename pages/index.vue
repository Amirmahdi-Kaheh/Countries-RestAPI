<template>
  <div>
    <div class="flex mb-6 items-center justify-between">
      <div class="flex items-center gap-4">
        <countries-search @submit="(value)=> filter.search = value" />
        <button class="flex items-center gap-2 p-3.5 group rounded-xl bg-white active:scale-90 transition-all" @click="randomChoice">
          <dices-icon />

          <span class="group-hover:block hidden text-sm text-gray">Pick Random!</span>
        </button>
      </div>

      <div>
        <countries-sort :name="sort.name" :population="sort.population" @sort-name="sortedByName" @sort-population="sortedByPopulation" />
      </div>
    </div>

    <countries-filter :region="regionQuery" />

    <div class="grid grid-cols-12 gap-6">
      <country-item v-for="(item, index) in filteredCountries" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import CountryItem from "~/components/pages/home/country-item";
import CountriesSearch from "~/components/pages/home/search-box";
import CountriesFilter from "~/components/pages/home/filter";
import CountriesSort from "~/components/pages/home/sort";
import DicesIcon from "~/components/global/icons/dices-icon";
import Fuse from 'fuse.js';

export default {
  name: 'IndexPage',
  components: {DicesIcon, CountriesSort, CountriesFilter, CountriesSearch, CountryItem},
  async asyncData ({ app,query, store, error }) {
    try {
      if(query.region) {
        const countriesAllDataByRegion = await app.$axios.get(`/v3.1/region/${query.region}`)

        return {
          countries: countriesAllDataByRegion.data
        };
      } else {
        const [
          countriesAllData
        ] = await Promise.all([
          app.$axios.get('/v3.1/all?fields=name,flags,population,region,capital,cca3')
        ]);

        return {
          countries: countriesAllData.data
        };
      }
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
        search: null
      },
      sort: {
        name: 'none',
        population: 'none',
      }
    }
  },
  watch: {
    regionQuery(newVal) {
      try {
        this.getAllByRegion(newVal.toLowerCase())
      } catch {
        this.getAllCountries()
      }
    }
  },
  computed:{
    regionQuery () {
      try {
        return this.$route.query.region
      }catch {
        return null
      }
    },
    filteredCountries () {
      if(this.filter.search) {
        const fuse = new Fuse(this.countries, {
          keys: ['name.common'], // Specify the key(s) to search for
          includeMatches: true,
          shouldSort: true,
          threshold: 0.5,
          location: 0,
          tokenize: true,
          matchAllTokens: true,
          findAllMatches: true,
          minMatchCharLength: 1,
          id: 'name'
        });

        return fuse.search(this.filter.search).map(result => result.item);
      }else {
        return this.countries
      }
    }
  },
  methods: {
    sortedByName() {
      if (this.sort.name === "asc" || this.sort.name === "none") {
        this.sort.name = "desc"
        this.sort.population = "none";

        function compare(a, b) {
          if (a.name.common < b.name.common) {
            return -1;
          }
          if (a.name.common > b.name.common) {
            return 1;
          }
          return 0;
        }

        return this.countries.sort(compare)
      } else if (this.sort.name === "desc") {
        this.sort.name = "asc"

        function compare(a, b) {
          if (a.name.common > b.name.common) {
            return -1;
          }
          if (a.name.common < b.name.common) {
            return 1;
          }
          return 0;
        }

        return this.countries.sort(compare)
      }
    },
    sortedByPopulation() {
      if (this.sort.population === "asc" || this.sort.population === "none") {
        this.sort.population = "desc";
        this.sort.name = "none";

        return this.countries.sort(function (a, b) {
          return b.population - a.population;
        })
      } else if (this.sort.population === "desc") {
        this.sort.population = "asc";
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.countries.sort(function (a, b) {
          return a.population - b.population;
        })
      }

    },
    async getAllByRegion(region){
      this.$axios.get(`/v3.1/region/${region}`).then((response)=>{
        this.countries = response.data;

        this.sort.population = 'none';
        this.sort.name = 'none';
      })
    },
    async getAllCountries(){
      this.$axios.get(`/v3.1/all`).then((response)=>{
        this.countries = response.data
      })
    },
    randomChoice() {
      const randomCountry = this.countries[Math.floor(Math.random()*this.countries.length)]
      this.$router.push(`/countries/${randomCountry.cca3}`)
    }
  }
}
</script>
