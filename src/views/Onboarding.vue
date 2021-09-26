<template>
  <div class="bg-black fixed duration-300 ease-in-out h-screen left-0 top-0 transition w-screen z-90"
    id="onboarding"
    v-bind:class="{
      'opacity-100': open,
      'opacity-0 pointer-events-none': !open
    }">
    <div class="h-12">
      <div class="font-teko-light float-right h-12 leading-12 mr-4 text-center text-ink-lightest text-2xl w-20"
        v-on:click="closeOnboarding()">SKIP</div>
    </div>

    <carousel
      :navigateTo="slide"
      :perPage="1"
      @page-change="pageChange">
      <slide>
        <img src="@/assets/onboarding/1.png">
        <div class="slide-text">
          <div class="font-teko-regular text-5xl text-center uppercase">WELCOME</div>
          <div class="text-center text-ink-lightest text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
        </div>
      </slide>

      <slide>
        <img src="@/assets/onboarding/2.png">
        <div class="slide-text">
          <div class="font-teko-regular text-5xl text-center uppercase">Connect</div>
          <div class="text-center text-ink-lightest text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
        </div>
      </slide>

      <slide>
        <img src="@/assets/onboarding/3.png">
        <div class="slide-text">
          <div class="font-teko-regular text-5xl text-center uppercase">Make money</div>
          <div class="text-center text-ink-lightest text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
        </div>
      </slide>

      <slide>
        <img src="@/assets/onboarding/4.png">
        <div class="absolute bottom-10 slide-text full">
          <div class="font-teko-regular text-5xl text-center uppercase">Let’s Jump in</div>
          <div class="text-center text-ink-lightest text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
        </div>
      </slide>
    </carousel>

    <div class="border border-ink-lightest h-12 mt-14 mx-auto rounded-full w-12"
      v-if="slide !== 3"
      v-on:click="nextPage()">
      <img class="h-4 mt-3.5 mx-auto w-4" src="@/assets/icons/arrow-right.svg" />
    </div>

    <div class="bg-white flex font-teko-regular h-14 leading-16 mt-12 mx-10 pl-6 pr-4 rounded-sm text-ink text-2xl uppercase"
      v-else
      v-on:click="closeOnboarding()">
      <div class="flex-grow">Start</div>
      <div class="flex-none">
        <img class="mt-4" src="@/assets/icons/arrow-right-black.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  computed: {
    open () {
      return this.$route.query.onboarding !== undefined && this.$route.query.onboarding === 'open'
    }
  },
  data () {
    return {
      slide: 0
    }
  },
  methods: {
    closeOnboarding () {
      const routeQuery = { ...this.$route.query }
      delete routeQuery.onboarding

      this.$router.push({
        query: {}
      }).catch(() => {})
    },
    nextPage () {
      this.slide = this.slide + 1
    },
    pageChange (e) {
      this.slide = e
    }
  }
}
</script>

<style lang="sass">
#onboarding
  padding-bottom: env(safe-area-inset-bottom)
  padding-top: env(safe-area-inset-top)

  .VueCarousel-slide
    height: 560px

    .slide-text
      margin: 0 auto
      width: 248px

      &.full
        margin: 0 calc(50vw - 124px)

  .VueCarousel-dot
    @apply bg-ink-light h-0.5 rounded-none px-0.5 w-10 #{!important}

    &.VueCarousel-dot--active
      @apply bg-sky-light #{!important}
</style>
