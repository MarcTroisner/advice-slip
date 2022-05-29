<template>
  <div class="not-found">
    <h1>Looks like even we can't give you the advice you need</h1>
    <h3>... or maybe you are just lost. Let us help.</h3>
    <BaseLinkRouter
      routeName="AdviceSlips"
      text="Find your way back"
    />
  </div>
</template>

<script setup>
import BaseLinkRouter from '@/components/BaseLinkRouter.vue';

</script>

<style lang="scss" scoped>
.not-found {
  @include flex-wrapper($direction: column, $align: center, $justify: center);
  height: 100%;
  padding: 2em 10vw;

  h3 {
    margin: 1.5em 0 3em 0;
  }
}
</style>
