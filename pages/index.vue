<template>
  <StepCard
    headline="Welcome"
    subline="to this fancy GitHub query tool"
    class="hd-l--step"
  >
    <p>
      This is just some coding challenge to test Julian Kerns skills for high
      quality code and UX design with Vue.js.
    </p>

    <p>
      In the following steps you will be asked for your GitHub username, as well
      as you name and e-mail address. After you've entered everything, you will
      be shown your GitHub data. Of course nothing will be stored permanently!
    </p>

    <template slot="buttons">
      <ButtonInput design="primary" @click="onClickNext">Let's go!</ButtonInput>
    </template>
  </StepCard>
</template>

<script>
import pageTransitionMixin from '@/components/mixins/pageTransitionMixin.js'

import StepCard from '@/components/StepCard.vue'
import ButtonInput from '@/components/ButtonInput.vue'

export default {
  components: {
    StepCard,
    ButtonInput,
  },
  mixins: [pageTransitionMixin],
  methods: {
    onClickNext() {
      window.$nuxt.$router.push('your-data')
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-l--step {
  p + p {
    margin-top: 1rem;
  }
}
</style>
