<template>
  <router-link class="base-link-router" :to="{ name: routeName }">
    {{ text }}
    <HandleIcons
      class="base-link-router__icon"
      classType="link"
      type="arrow_link"
    />
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';
import router from '@/router/index';
import HandleIcons from '@/components/HandleIcons.vue';

// Define props
defineProps({
  routeName: {
    type: String,
    required: true,
    validator: (value) => router.options.routes.some((route) => route.name === value),
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.base-link-router {
  @include flex-wrapper($align: center);
  @include position($pos: relative);
  column-gap: 0.4em;

  &:hover .base-link-router__icon {
    transform: translateX(0.4em);
  }

  .base-link-router__icon {
    @include base-transition(transform, 0.4s)
  }
}
</style>
