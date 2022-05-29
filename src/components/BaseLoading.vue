<template>
  <div class="base-loading">
    <div class="base-loading__animate"></div>
  </div>
</template>

<style lang="scss" scoped>
.base-loading {
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;

  .base-loading__animate {
    width: $loading-content-size;
    height: $loading-content-size;
    border-width: $loading-border-size;
    border-style: solid;
    border-color: $border-loading;
    border-top-color: $border-loading-animate;
    border-radius: calc($loading-content-size / 2);
    animation: rotate 1s ease-in-out infinite;
  }
}
</style>
