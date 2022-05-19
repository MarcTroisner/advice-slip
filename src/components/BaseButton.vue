<template>
  <button class="base-button">
    <HandleIcons
      v-if="icon !== undefined"
      class="base-button__icon"
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
  padding: 0 2em;
  width: fit-content;
  height: $base-button-height;
  column-gap: 0.8em;
  background: $background-button;
  border-radius: $base-button-height / 2;
  box-shadow: $shadow-button;
  cursor: pointer;

  &:hover .base-button__icon {
    transform: rotate(180deg);
  }

  .base-button__icon {
    transition: transform 0.4s ease-in-out;
  }

  .base-button__text {
    color: $font-button;
  }
}
</style>
