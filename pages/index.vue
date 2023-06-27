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
        <countries-sort :name="sort.name" :population="sort.population" @sort-name="sortedByName" @sort-population="sortedByPopulation" />
      </div>
    </div>

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
        search: null
      },
      sort: {
        name: 'none',
        population: 'none',
      }
    }
  },
  computed:{
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
