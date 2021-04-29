<template>
  <div class="hd-ui--toggle">
    <input
      :id="id"
      v-model="checked"
      class="hd-ui--toggle--input"
      type="checkbox"
      :name="name"
      :value="value"
      :aria-disabled="disabled"
      @change="onChange"
    />
    <label :for="id" class="hd-ui--toggle--label">
      <div class="hd-ui--toggle--bar">
        <div class="hd-ui--toggle--handle"></div>
      </div>
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  model: {
    prop: 'modelValue',
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line
    value: {},
    // eslint-disable-next-line
    modelValue: {},
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: '',
      checkedProxy: false,
    }
  },
  computed: {
    checked: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.checkedProxy = val
      },
    },
  },
  mounted() {
    this.id = uuid()
  },
  methods: {
    onChange(e) {
      if (this.disabled) return

      this.$emit('input', this.checkedProxy)
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-ui--toggle {
  & + & {
    margin-top: 1rem;
  }

  &--input {
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }

  &--label {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
  }

  &--bar {
    position: relative;
    width: 4rem;
    height: 2.25rem;
    background: $color-gray-4;
    border-radius: $border-radius-xlarge;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5rem;
    transition: all 300ms;
    flex: 0 0 auto;
  }

  &--handle {
    position: absolute;
    height: 2.25rem;
    width: 2.25rem;
    border-radius: $border-radius-xlarge;
    border: 2px solid $color-gray-4;
    background: $color-gray-1;
    transform: translateX(0);
    box-sizing: border-box;
    transition: all 300ms;
  }

  &--input[aria-disabled='true'] + &--label {
    opacity: 0.25;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--label:hover &--bar {
    background: $color-gray-5;
  }

  &--label:hover &--handle {
    border-color: $color-gray-5;
  }

  &--input:checked + &--label &--bar {
    background: $color-primary;
  }

  &--input:checked + &--label &--handle {
    border-color: $color-primary;
    transform: translateX(1.75rem); // 4rem - 2.25rem
  }

  &--input:focus:not([aria-disabled='true']) + &--label &--bar,
  &--input:active:not([aria-disabled='true']) + &--label &--bar {
    box-shadow: 0 0 0 0.5rem $color-gray-2;
  }

  &--input:checked + &--label:hover &--bar {
    background: $color-primary-dark;
  }

  &--input:checked + &--label:hover &--handle {
    border-color: $color-primary-dark;
  }

  &--input:focus:checked:not([aria-disabled='true']) + &--label &--bar,
  &--input:active:checked:not([aria-disabled='true']) + &--label &--bar {
    box-shadow: 0 0 0 0.5rem $color-primary-light;
  }
}
</style>
