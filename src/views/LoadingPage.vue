<template>
  <div class="items-center bg-black duration-300 ease-in-out fixed flex h-screen justify-center left-0 text-white top-0 transition w-screen z-100"
    id="loading-page"
    v-bind:class="{
      'opacity-0 pointer-events-none': appLoaded,
      'opacity-100': !appLoaded
    }">
    <div>
      <img class="mb-6 mx-auto" src="@/assets/logo.svg" />
      <div class="font-teko-regular text-4xl text-center uppercase">MarketPryce</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    appLoaded () {
      return this.$store.state.app.loaded
    }
  }
}
</script>

<style lang="sass" scoped>
#loading-page
  padding-bottom: env(safe-area-inset-bottom)
  padding-top: env(safe-area-inset-top)
</style>
