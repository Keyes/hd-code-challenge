<template>
  <div class="hd-ui--text-input">
    <input
      :id="id"
      v-model="modelValue"
      class="hd-ui--text-input--input"
      :class="{ 'hd-ui--text-input--input__placeholder-shown': !modelValue }"
      :name="name"
      :type="type"
      :aria-disabled="disabled"
      @input="onInput"
      @focus="() => $emit('focus')"
    />
    <label :for="id" class="hd-ui--text-input--label">
      <!-- @slot label for the text input -->
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    /**
     * type of the input
     * @values text,email,tel
     */
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      id: '',
      modelValue: this.value,
    }
  },
  computed: {},
  watch: {
    value(newVal) {
      this.modelValue = newVal
    },
  },
  mounted() {
    this.id = uuid()
  },
  methods: {
    onInput(e) {
      if (this.disabled) return

      this.$emit('input', this.modelValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-ui--text-input {
  position: relative;

  & + & {
    margin-top: 1rem;
  }

  &--input {
    width: 100%;
    padding: 1.5rem;
    padding-top: 1.875rem;
    padding-bottom: 0.625rem;
    box-sizing: border-box;
    border-radius: $border-radius;
    height: 4rem;
    background: $color-gray-3;
    border: 2px solid $color-gray-3;
    transition: all 200ms;

    &:focus:not([aria-disabled]) {
      background: $color-gray-1;
      box-shadow: 0 0 0 0.25rem $color-primary-light;
      outline: 0;
    }

    &:hover:not(:focus):not([aria-disabled]) {
      border-color: $color-gray-4;
    }

    // stylelint-disable-next-line no-descending-specificity
    .hd-h--has-error &,
    .hd-h--has-error &:hover:not(:focus):not([aria-disabled]) {
      background: $color-error-light;
      border-color: $color-error-dark;
    }
  }

  &--label {
    position: absolute;
    left: calc(1.5rem + 2px);
    top: 1.25rem;
    color: $color-gray-6;
    transition: all 200ms;
    user-select: none;
    font-size: 1rem;
    line-height: 1.5rem;

    .hd-h--has-error & {
      color: $color-error-dark;
    }
  }

  &--input[aria-disabled],
  &--input[aria-disabled] ~ &--label {
    opacity: 0.5;
    pointer-events: none;
  }

  &--input:not(&--input__placeholder-shown) ~ &--label,
  &--input__placeholder-shown:focus ~ &--label {
    top: 0.625rem;
    font-size: 0.8125rem;
    line-height: 1.25rem;
  }
}
</style>
