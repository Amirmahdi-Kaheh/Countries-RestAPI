<template>
  <div class="border-t-2 border-silver dark:border-silver-dark">
    <div class="container flex items-center justify-between py-6">
      <p>
        Made with ❤️ & ☕️ By
        <a class="hover:text-yellow" target="_blank" href="https://www.linkedin.com/in/mahdiar-kaheh-1b65291a6/">Mahdiar</a>
        2023&copy;
      </p>


      <a target="_blank" href="https://github.com/Amirmahdi-Kaheh/Countries-RestAPI">
        <github-icon />
      </a>
    </div>
  </div>
</template>

<script>
import GithubIcon from "@/components/global/icons/github-icon";
export default {
  name: "TheFooter",
  components: {GithubIcon}
}
</script>

<style scoped>

</style>
