<template>
  <div class="not-found">
    <h1>Looks like even we can't give you the advice you need</h1>
    <h3>... or maybe you are just lost. Let us help.</h3>
    <BaseLink
      routeName="RandomSlip"
      text="Find your way back"
      icon="arrow_link"
    />
  </div>
</template>

<script setup>
import BaseLink from '@/components/BaseLink.vue';

</script>

<style lang="scss" scoped>
.not-found {
  @include flex-wrapper($direction: column, $align: center, $justify: center);
  height: 100%;

  h3 {
    margin: 1.5em 0 3em 0;
  }
}
</style>
