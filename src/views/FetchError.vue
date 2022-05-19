<template>
  <div class="fetch-error">
    <h1>Looks like something went wrong on our side</h1>
    <h3>... maybe try again or reload the page.</h3>
    <BaseButton
      text="Try another slip"
      icon="reload"
      @click="$router.push({ name: 'RandomSlip' })"
    />
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue';

</script>

<style lang="scss" scoped>
.fetch-error {
  @include flex-wrapper($direction: column, $align: center, $justify: center);
  height: 100%;

  h3 {
    margin: 1.5em 0 3em 0;
  }
}
</style>
