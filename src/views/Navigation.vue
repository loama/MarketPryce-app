<template>
  <div class="h-14 w-screen"
    id="navigation">
    <div class="nav-item"
      v-bind:class="{
        active: this.activeRoute === ''
      }"
      v-on:click="go('/')">
      <img class="align-top inline-block mr-2 mt-4" src="@/assets/icons/navigation/home.svg" />
      <span class="label">
        Home
      </span>
    </div>

    <div class="nav-item"
      v-bind:class="{
        active: this.activeRoute === 'campaigns'
      }"
      v-on:click="go('/campaigns')">
      <img class="align-top inline-block mr-2 mt-4" src="@/assets/icons/navigation/award.svg" />
      <span class="label">
        Campaigns
      </span>
    </div>

    <div class="nav-item"
      v-bind:class="{
        active: this.activeRoute === 'chat'
      }"
      v-on:click="go('/chat')">
      <img class="align-top inline-block mr-2 mt-4" src="@/assets/icons/navigation/mail.svg" />
      <span class="label">
        Chat
      </span>
    </div>

    <div class="nav-item"
      v-bind:class="{
        active: this.activeRoute === 'profile'
      }"
      v-on:click="go('/profile')">
      <img class="align-top inline-block mr-2 mt-4" src="@/assets/icons/navigation/person.svg" />
      <span class="label">
        Profile
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeRoute () {
      const route = this.$route.path.split('/')[1].replace('/', '')
      return route
    }
  },
  methods: {
    go (to) {
      try {
        this.$router.push(to)
      } catch {
        //
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#navigation
  border-bottom: 0.5px solid rgba(122, 126, 128, 0.5)
  border-top: 0.5px solid rgba(122, 126, 128, 0.5)

.nav-item
  border-color: rgba(122, 126, 128, 0)
  line-height: 56px
  transition: all 0.3s
  width: calc((100vw - 170px) / 3)
  @apply border-l border-r ease-in-out h-14 inline-block opacity-50 overflow-hidden text-center

  .label
    display: none

  &.active
    border-color: rgba(122, 126, 128, 0.5)
    width: 170px
    @apply opacity-100

    &:first-child
      border-left: 0

    &:last-child
      border-right: 0

    .label
      display: inline-block
</style>
