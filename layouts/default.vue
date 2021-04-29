<template>
  <div class="hd-g--container">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'

export default {
  components: { AppHeader },
  computed: {
    ...mapState('steps', {
      navigationSteps: 'steps',
    }),
  },
  mounted() {
    if (this.navigationSteps && this.navigationSteps.length) {
      window.sessionStorage.setItem(
        'navigationSteps',
        JSON.stringify(this.navigationSteps)
      )
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

body {
  background: $color-gray-2;
  min-height: 100vh;
}
</style>
