<template>
  <div class="bg-background duration-500 ease-in-out fixed pt-6 px-4 rounded-t-2xl transition w-screen z-90"
    id="athlete-modal"
    v-bind:class="{open: open}">

    <div class="flex">
      <img class="border-2 border-sky-dark flex-none h-20 rounded-lg w-20"
        :src="athlete.img" />

      <div class="flex-grow ml-4">
        <div class="font-semibold text-xl">{{athlete.firstName}} {{athlete.lastName}}</div>
        <div class="text-ink-lightest text-sm">{{athlete.industry_lvl2}}</div>

        <div class="mt-1 text-sm">{{athlete.currentCity}}, {{athlete.currentState}} </div>
      </div>

      <div class="flex-none h-12 -mt-2 opacity-50 w-12 hover:opacity-100"
        v-on:click="$emit('close-modal')">
        <img class="m-2" src="@/assets/icons/close-white.svg" />
      </div>
    </div>

    <hr class="border-b border-ink-light my-4 w-full" />
  </div>
</template>

<script>
import athletes from '@/assets/athletes.json'

export default {
  computed: {
    athletes () {
      const data = athletes.data.searchInfluencers.items
      return data
    },
    athlete () {
      if (this.$route.query.id === undefined) {
        return {}
      }

      for (let i = 0; i < this.athletes.length; i++) {
        const athlete = this.athletes[i]

        if (athlete.id === this.$route.query.id) {
          return athlete
        }
      }

      return {}
    }
  },
  props: {
    open: Boolean
  }
}
</script>

<style lang="sass" scoped>
#athlete-modal
  height: 90vh
  top: 100vh
  transform: translate3d(0, 0, 0)

  &.open
    transform: translate3d(0, -90vh, 0)
</style>
