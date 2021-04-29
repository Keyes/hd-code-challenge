<template>
  <form class="hd-c--email-form" @submit.prevent="$emit('submit')">
    <InputField :state="fieldStates.fieldEmail">
      <TextInput v-model.trim="$v.fieldEmail.$model">E-Mail address</TextInput>
      <template #error>
        <div v-if="!$v.fieldEmail.required">Please fill this field!</div>
        <div v-if="!$v.fieldEmail.email">
          Please enter a valid e-mail address
        </div>
      </template>
    </InputField>

    <InputField :state="fieldStates.fieldAgb">
      <ToggleInput v-model="fieldAgb" value="power">
        Yes, I agree with terms and services
      </ToggleInput>

      <template #error>
        <div v-if="!$v.fieldAgb.required">Please activate this field!</div>
      </template>
    </InputField>

    <!-- Hidden submit input allows pressing enter within textinputs to submit the form -->
    <input
      type="submit"
      class="hd-c--email-form--hidden-submit"
      hidefocus="true"
      tabindex="-1"
    />
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators'

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
      fieldEmail: {
        email,
        required,
      },
      fieldAgb: {
        required,
      },
    }
  },
  data() {
    return {
      fieldEmail: '',
      fieldAgb: false,
    }
  },
  computed: {
    ...mapState('user', {
      stateEmail: 'emailAddress',
      stateAgb: 'termsAccepted',
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
    if (this.stateEmail) this.fieldEmail = this.stateEmail
    if (this.stateAgb) this.fieldAgb = this.stateAgb
  },
  methods: {
    ...mapMutations('user', ['setFormData']),
    save() {
      this.setFormData({
        emailAddress: this.fieldEmail,
        termsAccepted: this.fieldAgb,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-c--email-form {
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
