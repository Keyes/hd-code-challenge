<template>
  <div class="hd-c--header / hd-h--mb2 hd-h--mt1">
    <div class="hd-c--header--logo / hd-ui--card-large / hd-ui--shadow-1">
      <img src="@/assets/hd-logo.svg" alt="logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hd-c--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @include vgrid-mq(min md) {
    flex-wrap: nowrap;
  }

  &--logo {
    padding: 0.5rem 1.5rem;
    display: inline-block;
    overflow: hidden;
    border-radius: 3rem;

    img {
      width: 8rem;
    }
  }
}
</style>
