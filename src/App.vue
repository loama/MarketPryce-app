<template>
  <div class="text-white"
    id="app">
    <Auth />
    <LoadingPage />
    <Onboarding />

    <router-view/>
  </div>
</template>

<script>
import 'tailwindcss/tailwind.css'
import { StatusBar, Style } from '@capacitor/status-bar'
import Auth from '@/views/Auth'
import LoadingPage from '@/views/LoadingPage'
import Onboarding from '@/views/Onboarding'

export default {
  components: {
    Auth,
    LoadingPage,
    Onboarding
  },
  methods: {
    async setStatusBarStyleDark () {
      const result = await StatusBar.setStyle({ style: Style.Dark })

      return result
    }
  },
  mounted () {
    this.setStatusBarStyleDark()

    this.$router.push({
      query: {
        onboarding: 'open'
      }
    })

    const self = this
    setTimeout(() => {
      self.$store.commit('loaded')
    }, 2000)
  }
}
</script>

<style lang="sass">
@import "@/styles/main"

html, body
  @apply bg-black
</style>
