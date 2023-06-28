<template>
  <div class="flex items-center gap-6 py-4 mb-6 border-t-2 border-b-2 border-silver dark:border-silver-dark">
   <div class="hidden sm:flex items-center gap-4">
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" class="stroke-gray dark:stroke-gray-dark" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

     <p>Filter By Region</p>
   </div>

    <div class="w-max sm:w-auto overflow-x-auto overflow-y-hidden">
      <div class="flex items-center gap-1">
        <button @click="setFilterQuery(null)" :class="['px-4 py-2 rounded-xl', {'bg-silver dark:bg-silver-dark pointer-events-none': !region}]">
          All
        </button>

        <button v-for="item in regions" :key="item" @click="setFilterQuery(item)" :class="['px-4 py-2 rounded-xl capitalize', {'bg-silver dark:bg-silver-dark pointer-events-none': region === item}]">
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountriesFilter",
  data () {
    return {
      regions: ['asia', 'europe', 'africa', 'america', 'oceania']
    }
  },
  props: {
    region: {
      default: null,
      type: String
    }
  },
  methods: {
    setFilterQuery(region){
      if(region){
        this.$router.replace({ query: {region: region} })
      }else {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style scoped>

</style>
