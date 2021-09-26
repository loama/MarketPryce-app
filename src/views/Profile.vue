<template>
  <div class="mt-4">
    <div class="flex px-4">
      <div class="flex-grow mr-3">
        <img class="h-16 w-16" src="@/assets/Images_ Avatars.png" />
        <div class="font-teko-regular mt-3 text-2xl uppercase">Kaizer Jordans.</div>
        <div class="-mt-1 text-ink-lightest text-sm">kaizerjordans@gmail.com</div>
      </div>

      <div class="border border-ink-lighter flex-none h-8 leading-8 mt-22 rounded-sm text-center text-sm w-32">
        Edit Profile
        <img class="align-top inline ml-3 mt-2"
          src="@/assets/icons/arrow-right.svg" />
      </div>
    </div>

    <hr class="border-b border-ink-light mb-3 mt-6 w-full" />

    <div class="px-4">
      <div class="bg-white h-11 leading-11 rounded-md text-ink">
        <img class="inline mx-3" src="@/assets/icons/zap.svg" />
        <span class="text-sm">Athlete</span>
      </div>

      <div class="border border-ink-light h-11 leading-11 mt-3 rounded-md text-ink-lightest">
        <img class="inline mx-3" src="@/assets/icons/trending-up.svg" />
        <span class="text-sm">Switch to Brand</span>
      </div>

      <div class="border border-ink-light h-11 leading-11 mt-3 rounded-md text-ink-lightest">
        <img class="inline mx-3" src="@/assets/icons/watch.svg" />
        <span class="text-sm">Swich to Agent</span>
      </div>
    </div>

    <hr class="border-b border-ink-light mt-6 w-full" />

    <div class="flex h-18 leading-18 px-4">
      <div class="flex-grow">
        <img class="inline mr-2" src="@/assets/icons/settings.svg" />
        <span>Settings</span>
      </div>

      <div class="flex-none">
        <img class="mt-7" src="@/assets/icons/chevron-right.svg" />
      </div>
    </div>

    <hr class="border-b border-ink-light w-full" />

    <div class="flex h-18 leading-18 px-4">
      <div class="flex-grow">
        <img class="inline mr-2" src="@/assets/icons/shield.svg" />
        <span>Help</span>
      </div>

      <div class="flex-none">
        <img class="mt-7" src="@/assets/icons/chevron-right.svg" />
      </div>
    </div>

    <hr class="border-b border-ink-light w-full" />

    <div class="flex h-18 leading-18 px-4">
      <div class="flex-grow">
        <img class="inline mr-2" src="@/assets/icons/server.svg" />
        <span>How it works</span>
      </div>

      <div class="flex-none">
        <img class="mt-7" src="@/assets/icons/chevron-right.svg" />
      </div>
    </div>

    <hr class="border-b border-ink-light w-full" />

    <div class="flex h-18 leading-18 px-4"
      v-on:click="logout()">
      <div class="flex-grow">
        <img class="inline mr-2 w-6" src="@/assets/icons/power.svg" />
        <span>Logout</span>
      </div>

      <div class="flex-none">
        <img class="mt-7" src="@/assets/icons/chevron-right.svg" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('logout')
      const self = this
      setTimeout(() => {
        self.$router.push('/')
      }, 1000)
    }
  }
}
</script>
