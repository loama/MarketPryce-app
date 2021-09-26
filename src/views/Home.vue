<template>
  <div class="px-8 py-6" id="home">
    <div class="gap-6 grid grid-cols-2 mx-auto">
      <div class="w-full" v-bind:key="athlete.id"
        v-for="athlete in athletes">

        <img class="border-2 border-ink-light h-28 object-center object-cover rounded-md w-full"
          :src="athlete.img"
          v-if="athlete.img" />

        <img class="border-2 border-ink-light h-28 object-center object-contain rounded-md w-full"
          src="@/assets/icons/athleteplaceholder.svg" v-else />

        <div class="text-center">
          <div class="mt-1 text-sm">{{athlete.firstName}} {{athlete.lastName}}</div>
          <div class="text-ink-lighter text-sm">{{athlete.industry_lvl2}}</div>

          <div class="text-center">
            <img class="inline" src="@/assets/icons/instagram.svg" />
            <span class="mx-2">·</span>

            <div class="inline text-ink-lightest text-xs">
              <span v-if="athlete.followerCount < 1000">{{athlete.followerCount}}</span>
              <span v-if="athlete.followerCount > 1000 && athlete.followerCount < 1000000">{{parseInt(athlete.followerCount / 1000)}}k</span>
              <span v-if="athlete.followerCount > 1000000">{{parseInt(athlete.followerCount / 1000000)}}M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import athletes from '@/assets/athletes.json'

export default {
  computed: {
    athletes () {
      return athletes.data.searchInfluencers.items
    }
  },
  name: 'Home'
}
</script>

<style lang="sass" scoped>
</style>
