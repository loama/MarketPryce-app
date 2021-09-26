<template>
  <div class="bg-background duration-300 ease-in-out fixed h-screen left-0 top-0 transiton w-screen z-80"
    id="auth-view"
    v-bind:class="{
      'opacity-100': open,
      'opacity-0 pointer-events-none': !open
    }">
    <img src="@/assets/auth/1.png" />
    <div class="font-teko-regular text-4xl text-center uppercase">MarketPryce</div>

    <div class="absolute border-t border-ink-lightest bottom-0 px-6 py-6 w-screen"
      id="auth-card">
      <div class="h-6 ml-1">Login or create your account</div>

      <div class="bg-white flex font-teko-regular mt-6 h-14 leading-16 pl-6 pr-4 rounded-sm text-ink text-2xl uppercase"
        v-on:click="closeAuth()">
        <div class="flex-grow">Continue with email</div>
        <div class="flex-none">
          <img class="mt-4" src="@/assets/icons/arrow-right-black.svg" />
        </div>
      </div>

      <div class="bg-white flex font-teko-regular mt-6 h-14 leading-16 pl-6 pr-4 rounded-sm text-ink text-2xl uppercase"
        v-on:click="closeAuth()">
        <div class="flex-grow">
          <img class="align-top inline mr-6 mt-4" src="@/assets/icons/google.svg" />
          Google
        </div>

        <div class="flex-none">
          <img class="mt-4" src="@/assets/icons/arrow-right-black.svg" />
        </div>
      </div>

      <div class="bg-white flex font-teko-regular mb-10 mt-6 h-14 leading-16 pl-6 pr-4 rounded-sm text-ink text-2xl uppercase"
        v-on:click="closeAuth()">
        <div class="flex-grow">
          <img class="align-top inline mr-6 mt-4" src="@/assets/icons/facebook.svg" />
          Facebook
        </div>

        <div class="flex-none">
          <img class="mt-4" src="@/assets/icons/arrow-right-black.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    open () {
      const user = this.$store.state.user

      if (user === null) {
        return true
      }

      return false
    }
  },
  methods: {
    closeAuth () {
      this.$store.commit('login', {})
    }
  }
}
</script>

<style lang="sass" scoped>
#auth-view
  padding-bottom: env(safe-area-inset-bottom)
  padding-top: env(safe-area-inset-top)

#auth-card
  padding-bottom: env(safe-area-inset-bottom)
</style>
