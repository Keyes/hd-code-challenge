<template>
  <button
    class="hd-ui--btn / hd-ui--shadow-1"
    :class="{
      [`hd-ui--btn__${design}`]: design,
    }"
    :aria-disabled="disabled"
    @click.prevent="onClick"
  >
    <!-- @slot the button text -->
    <slot class="text"></slot>
  </button>
</template>

<script>
export default {
  props: {
    /**
     * The design for the button
     * @values primary, secondary
     */
    design: {
      type: String,
      default: 'secondary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(e) {
      if (this.disabled) return

      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-ui--btn {
  position: relative;
  border-radius: $border-radius-xlarge;
  border: 0;
  cursor: pointer;
  transition: all 300ms;
  margin: 0.5rem;
  overflow: hidden;
  padding: 1rem 2rem;

  &::after {
    content: '';
    position: absolute;
    border-radius: $border-radius-xlarge;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 300ms;
  }

  &:focus:not([aria-disabled='true']),
  &:active:not([aria-disabled='true']) {
    outline: 0;
  }

  &[aria-disabled='true'] {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &__primary {
    background: $color-primary;
    color: $color-white;

    &:hover:not([aria-disabled='true']) {
      background: $color-primary-dark;
    }

    &:focus:not([aria-disabled='true']),
    &:active:not([aria-disabled='true']) {
      box-shadow: 0 0 0 0.5rem $color-primary-light;
    }
  }

  &__secondary {
    background: $color-gray-3;
    color: $color-secondary;

    &:focus:not([aria-disabled='true']),
    &:active:not([aria-disabled='true']),
    &:hover:not([aria-disabled='true']) {
      background: $color-gray-4;
    }

    &:focus:not([aria-disabled='true']),
    &:active:not([aria-disabled='true']) {
      box-shadow: 0 0 0 0.5rem $color-gray-2;
    }
  }
}
</style>
