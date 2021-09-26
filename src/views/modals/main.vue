<template>
  <div>
    <AthleteModal v-bind:open="current === 'athlete'"
      v-on:close-modal="closeModal()"/>

    <div class="bg-ink-light duration-300 ease-in-out fixed h-screen left-0 top-0 transition w-screen z-80"
      id="modal-overlay"
      v-bind:class="{
        'opacity-80': current !== undefined,
        'opacity-0 pointer-events-none': current === undefined
      }"
      v-on:click="closeModal()" />
  </div>
</template>

<script>
import AthleteModal from './Athlete'

export default {
  components: {
    AthleteModal
  },
  computed: {
    current () {
      return this.$route.query.modal
    }
  },
  methods: {
    closeModal () {
      console.log('a')
      const routeQuery = { ...this.$route.query }

      delete routeQuery.id
      delete routeQuery.modal

      this.$router.push({
        query: routeQuery
      }).catch(() => {})
    }
  }
}
</script>
