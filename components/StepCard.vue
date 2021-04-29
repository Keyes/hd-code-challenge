<template>
  <div class="hd-g--row">
    <div class="hd-g--col-md-10 hd-g--col-offset-md-1">
      <div class="hd-ui--card / hd-ui--shadow-2 / hd-c--step-card / hd-h--mb2">
        <div v-if="stepName" class="hd-ui--text-sb-m">
          {{ stepNumber }}/{{ totalSteps }}: {{ stepName }}
        </div>

        <h2
          class="hd-c--step-card--title / hd-h--mt1"
          :class="{ 'hd-h--mb2': !subline }"
        >
          {{ headline }}
        </h2>
        <h3 v-if="subline" class="hd-c--step-card--title-subline / hd-h--mb2">
          {{ subline }}
        </h3>
        <slot></slot>
        <div class="hd-c--step-card--buttons / hd-h--mt2">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stepNumber: {
      type: Number,
      default: 1,
    },
    totalSteps: {
      type: Number,
      default: 5,
    },
    stepName: {
      type: String,
      default: '',
    },
    headline: {
      type: String,
      default: 'Die ganz große Frage',
    },
    subline: {
      type: String,
      default: 'Die ganz große Frage',
    },
  },
}
</script>

<style lang="scss" scoped>
.hd-c--step-card {
  padding: 1rem;

  ::v-deep .hd-ui--option-card-grid {
    margin: 0 auto;
    gap: 1rem;

    @include vgrid-mq(min md) {
      width: 60%;
      gap: 2rem;
    }
  }

  &--title {
    color: $color-gray-8;
    font-size: 1.875rem; // 30px
    line-height: 1.15;
    font-weight: 700;
  }

  &--title-subline {
    color: $color-gray-8;
    font-size: 1rem; // 16px
    line-height: 1.5;
    font-weight: 600;
  }

  &--buttons {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;

    @include vgrid-mq(min md) {
      width: 80%;
    }

    ::v-deep .hd-ui--btn {
      flex-basis: calc(50% - 0.5rem);
      margin: 0;
      white-space: nowrap;

      &:first-child:last-child {
        margin: 0 auto;
      }
    }
  }

  .hd-ui--text-sb-m {
    text-transform: uppercase;
  }
}
</style>
