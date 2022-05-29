<template>
  <button class="base-button">
    <HandleIcons
      v-if="icon !== undefined"
      classType="button"
      :type="icon"
    />
    <p class="base-button__text">{{ text }}</p>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
import HandleIcons from '@/components/HandleIcons.vue';

// Define props
defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  @include flex-wrapper($align: center, $justify: center);
  @include base-transition(background-color);
  padding: 0 2em;
  width: fit-content;
  height: $base-button-height;
  column-gap: 0.6em;
  background: $background-button;
  border-radius: $base-button-height / 2;
  box-shadow: $shadow-button;
  cursor: pointer;

  &:hover {
    background: $background-button-hover;
  }

  .base-button__text {
    color: $font-button;
  }
}
</style>
