<template>
  <div class="fetch-error">
    <h1>Looks like something went wrong on our side</h1>
    <h3>... maybe try again or reload the page.</h3>
    <BaseButton
      text="Try another slip"
      icon="redo"
      @click="handleClick()"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

function handleClick() {
  router.push({ name: 'AdviceSlips' });
}
</script>

<style lang="scss" scoped>
.fetch-error {
  @include flex-wrapper($direction: column, $align: center, $justify: center);
  height: 100%;
  padding: 2em 10vw;

  h3 {
    margin: 1.5em 0 3em 0;
  }
}
</style>
