<template>
  <form class="hd-c--github-form" @submit.prevent="$emit('submit')">
    <InputField :state="fieldStates.fieldFirstName">
      <TextInput v-model.trim="$v.fieldFirstName.$model">First name</TextInput>
      <template #error>
        <div v-if="!$v.fieldFirstName.required">Please fill this field!</div>
      </template>
    </InputField>

    <InputField :state="fieldStates.fieldLastName">
      <TextInput v-model.trim="$v.fieldLastName.$model">Last name</TextInput>
      <template #error>
        <div v-if="!$v.fieldLastName.required">Please fill this field!</div>
      </template>
    </InputField>

    <InputField :state="fieldStates.fieldGithub">
      <TextInput v-model.trim="$v.fieldGithub.$model">
        GitHub username
      </TextInput>
      <template #error>
        <div v-if="!$v.fieldGithub.required">Please fill this field!</div>
      </template>
      <template #caption>Please make sure your username is correct!</template>
    </InputField>

    <!-- Hidden submit input allows pressing enter within textinputs to submit the form -->
    <input
      type="submit"
      class="hd-c--github-form--hidden-submit"
      hidefocus="true"
      tabindex="-1"
    />
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

import TextInput from './TextInput'
import InputField from './InputField'

export default {
  components: {
    TextInput,
    InputField,
  },
  mixins: [validationMixin],
  validations() {
    return {
      fieldFirstName: {
        required,
      },
      fieldLastName: {
        required,
      },
      fieldGithub: {
        required,
      },
    }
  },
  data() {
    return {
      fieldFirstName: '',
      fieldLastName: '',
      fieldGithub: '',
    }
  },
  computed: {
    ...mapState('user', {
      stateFirstName: 'firstName',
      stateLastName: 'lastName',
      stateGithub: 'githubUsername',
    }),
    fieldStates() {
      const fields = Object.keys(this.$v.$params)
      const returnObj = {}

      fields.forEach((field) => {
        if (this.$v[field].$error) returnObj[field] = 'error'
        else if (this.$v[field].$invalid) returnObj[field] = ''
        else returnObj[field] = ''
      })

      return returnObj
    },
  },
  mounted() {
    if (this.stateFirstName) this.fieldFirstName = this.stateFirstName
    if (this.stateLastName) this.fieldLastName = this.stateLastName
    if (this.stateGithub) this.fieldGithub = this.stateGithub
  },
  methods: {
    ...mapMutations('user', ['setFormData']),
    save() {
      this.setFormData({
        firstName: this.fieldFirstName,
        lastName: this.fieldLastName,
        githubUsername: this.fieldGithub,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-c--github-form {
  margin: 0 auto;

  @include vgrid-mq(min md) {
    width: 60%;
  }

  &--hidden-submit {
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }
}
</style>
