<template>
  <div class="relative flex items-center">
    <input v-model="formData.search" type="text" placeholder="Search for a Country ..." class="form-control pl-14 w-full sm:w-auto">

    <search-icon class="absolute left-4 w-6" />
  </div>
</template>

<script>
import SearchIcon from "~/components/global/icons/search-icon";
export default {
  name: "CountriesSearch",
  components: {SearchIcon},
  data () {
    return {
      formData: {
        search: ''
      }
    }
  },
  watch: {
    'formData.search' (newVal) {
      this.$emit('submit', newVal)
    }
  }
}
</script>

<style scoped>

</style>
