<template>
  <div class="text-white"
    id="app">
    <Auth />
    <LoadingPage />
    <Onboarding />

    <div class="font-teko-regular h-14 leading-16 text-center text-2xl uppercase"
      id="topbar">
      <img class="align-top inline mt-5 w-6" src="@/assets/logo.svg" />
      MarketPryce
    </div>

    <div id="content">
      <router-view/>
    </div>

    <Navigation />
  </div>
</template>

<script>
import 'tailwindcss/tailwind.css'
import { StatusBar, Style } from '@capacitor/status-bar'
import Auth from '@/views/Auth'
import LoadingPage from '@/views/LoadingPage'
import Navigation from '@/views/Navigation'
import Onboarding from '@/views/Onboarding'

export default {
  components: {
    Auth,
    LoadingPage,
    Navigation,
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

#app
  padding-top: env(safe-area-inset-top)

#content
  height: calc(100vh - env(safe-area-inset-top) - 56px - 56px - env(safe-area-inset-bottom))
  overflow-y: scroll

#topbar
  border-bottom: 0.5px solid rgba(122, 126, 128, 0.5)
  border-top: 0.5px solid rgba(122, 126, 128, 0.5)
</style>
