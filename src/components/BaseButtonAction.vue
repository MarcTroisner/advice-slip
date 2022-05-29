<template>
  <div class="base-link-action">
    <p class="base-link-action__text">{{ text }}</p>
    <HandleIcons
      v-if="icon !== undefined"
      class="base-link-action__icon"
      classType="link"
      :type="icon"
    />
  </div>
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
.base-link-action {
  @include flex-wrapper($align: center);
  padding: 0 2em;
  width: fit-content;
  height: $base-button-height;
  column-gap: 0.4em;
  border-radius: $base-button-height / 2;
  @include base-transition(background-color);
  cursor: pointer;

  &:hover {
    background: $background-hover;
  }

  .base-link-action__text {
    font-weight: 500;
    font-size: 0.9rem;
    color: $font-link;
  }

  .base-link-action__icon {
    @include base-transition(transform, 0.4s);
  }
}
</style>
