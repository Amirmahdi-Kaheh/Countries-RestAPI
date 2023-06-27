<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      <country-item v-for="(item, index) in countries" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import CountryItem from "~/components/pages/home/country-item";
export default {
  name: 'IndexPage',
  components: {CountryItem},
  async asyncData ({ app, store, error }) {
    try {
      const [
        countriesAllData
      ] = await Promise.all([
        app.$axios.get('/v3.1/all?fields=name,flags,population,region,capital')
      ]);

      return {
        countries: countriesAllData.data
      };
    } catch (err) {
      throw err
    }
  },
  created() {
    // this.getAll()
  },
  methods: {
    async getAll(){
      this.$axios.get('/v3.1/alpha?codes=400').then((response)=>{
        this.response = response.data
      })
    }
  }
}
</script>
