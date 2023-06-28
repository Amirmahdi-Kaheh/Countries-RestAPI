<template>
  <header class="sticky top-0 w-full sm:py-8 py-4 bg-white dark:bg-white-dark z-30 border-b-2 border-silver dark:border-silver-dark dark:bg-primary-dark">
    <div class="container flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center gap-4 group">
        <img src="~/static/icon.png" class="group-hover:animate-spin" alt="">

        <!--  #WEBSITE TITLE    -->
        <h1 class="text-xl font-semibold hidden sm:block">Where in the World ?</h1>
      </nuxt-link>

      <div @click="changeTheme">
        <button v-show="userDefaultTheme === 'light'" class="px-4 py-2.5 rounded-xl hover:bg-background hover:dark:bg-background-dark">
          Dark Mode
        </button>

        <button v-show="userDefaultTheme === 'dark'" class="px-4 py-2.5 rounded-xl hover:bg-background hover:dark:bg-background-dark">
          Light Mode
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "TheHeader",
  computed: {
    ...mapGetters('theme', ['userDefaultTheme']),
  },
  methods: {
    changeTheme () {
      if (this.userDefaultTheme === 'light') {
        this.$cookies.set('theme', 'dark');
        this.$store.commit('theme/SET_USER_DEFAULT_THEME', 'dark');

      } else {
        this.$cookies.set('theme', 'light');
        this.$store.commit('theme/SET_USER_DEFAULT_THEME', 'light');
      }
    }
  }
}
</script>

<style scoped>

</style>
