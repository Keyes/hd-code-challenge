<template>
  <StepCard
    :step-number="1"
    :total-steps="3"
    step-name="User"
    headline="User data"
    subline="Please give us some details"
    class="hd-l--step"
  >
    <GitHubForm ref="github-form" @submit="onClickNext" />

    <template v-if="formLoaded" slot="buttons">
      <ButtonInput design="secondary" @click="onClickPrev">Back</ButtonInput>
      <ButtonInput
        design="primary"
        :disabled="!nextButtonEnabled"
        @click="onClickNext"
      >
        Next step
      </ButtonInput>
    </template>
  </StepCard>
</template>

<script>
// import { mapGetters, mapMutations } from 'vuex'
import pageTransitionMixin from '@/components/mixins/pageTransitionMixin.js'

import StepCard from '@/components/StepCard.vue'
import ButtonInput from '@/components/ButtonInput.vue'
import GitHubForm from '@/components/GitHubForm.vue'

export default {
  components: {
    StepCard,
    ButtonInput,
    GitHubForm,
  },
  mixins: [pageTransitionMixin],
  data() {
    return {
      formLoaded: false,
    }
  },
  computed: {
    nextButtonEnabled() {
      return !this.$refs['github-form'].$v.$invalid
    },
  },
  mounted() {
    if (this.$refs['github-form']) this.formLoaded = true
  },
  methods: {
    onClickNext() {
      if (this.$refs['github-form'].$v.$invalid) {
        return this.$refs['github-form'].$v.$touch()
      }

      this.$refs['github-form'].save()
      window.$nuxt.$router.push('accept-terms')
    },
    onClickPrev() {
      window.$nuxt.$router.push('/')
    },
  },
}
</script>
