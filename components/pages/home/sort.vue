<template>
  <div class="flex items-center gap-2">
    <button @click="$emit('sort-population')" :class="['flex items-center gap-2 px-5 py-2.5 rounded-full active:scale-90 transition-all', {'bg-silver': population !== 'none'}]">
      <sort-icon :class="[{'rotate-180':population==='asc'}]" />

      <span>Population</span>
    </button>

    <button @click="$emit('sort-name')" :class="['flex items-center gap-2 px-5 py-2.5 rounded-full active:scale-90 transition-all', {'bg-silver': name !== 'none'}]">
      <sort-icon :class="[{'rotate-180':name==='asc'}]" />

      <span>Name</span>
    </button>
  </div>
</template>

<script>
import SortIcon from "~/components/global/icons/sort-icon";
export default {
  name: "CountriesSort",
  components: {SortIcon},
  props: {
    name: {
      default: null,
      type: String
    },
    population: {
      default: null,
      type: String
    }
  }
}
</script>

<style scoped>

</style>
