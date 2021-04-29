<template>
  <div
    class="hd-ui--input-field"
    :class="{
      'hd-h--has-error': state === 'error',
      'hd-h--has-success': state === 'success',
    }"
  >
    <!-- @slot should contain the input element -->
    <slot></slot>
    <transition name="slide" mode="out-in">
      <div
        v-if="state === 'error'"
        key="error-state"
        class="hd-ui--input-field--error"
      >
        <!-- @slot should contain error text -->
        <slot name="error"></slot>
      </div>
      <div v-else key="caption-state" class="hd-ui--input-field--caption">
        <!-- @slot should contain the caption -->
        <slot name="caption"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * state of the field
     * @values '', success, error
     */
    state: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-ui--input-field {
  position: relative;

  .slide-enter-active {
    transition: all 0.15s ease-out;
  }

  .slide-leave-active {
    transition: all 0.15s ease-in;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }

  .slide-enter {
    transform: translate3d(3rem, 0, 0);
  }

  .slide-leave-to {
    transform: translate3d(-3rem, 0, 0);
  }

  & + & {
    margin-top: 1rem;
  }

  &--error,
  &--caption {
    margin-top: 0.5rem;
    color: $color-gray-6;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  &--error {
    color: $color-error-dark;
  }
}
</style>
