<template>
  <StepCard
    :step-number="2"
    :total-steps="3"
    step-name="Email"
    headline="Email & Terms"
    subline="Please give us your e-mail"
    class="hd-l--step"
  >
    <EmailForm ref="email-form" @submit="onClickNext" />

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
import pageTransitionMixin from '@/components/mixins/pageTransitionMixin.js'

import StepCard from '@/components/StepCard.vue'
import ButtonInput from '@/components/ButtonInput.vue'
import EmailForm from '@/components/EmailForm.vue'

export default {
  components: {
    StepCard,
    ButtonInput,
    EmailForm,
  },
  mixins: [pageTransitionMixin],
  data() {
    return {
      formLoaded: false,
    }
  },
  computed: {
    nextButtonEnabled() {
      return !this.$refs['email-form'].$v.$invalid
    },
  },
  mounted() {
    if (this.$refs['email-form']) this.formLoaded = true
  },
  methods: {
    onClickNext() {
      if (this.$refs['email-form'].$v.$invalid) {
        return this.$refs['email-form'].$v.$touch()
      }

      this.$refs['email-form'].save()
      window.$nuxt.$router.push('github-result')
    },
    onClickPrev() {
      window.$nuxt.$router.push('your-data')
    },
  },
}
</script>
