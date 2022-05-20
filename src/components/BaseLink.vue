<template>
  <router-link class="base-link" :to="{ name: routeName }">
    {{ text }}
    <HandleIcons
      v-if="icon !== undefined"
      class="base-link__icon"
      classType="link"
      :type="icon"
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
  icon: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.base-link {
  @include flex-wrapper($align: center);
  @include position($pos: relative);
  column-gap: 0.4em;

  &:hover .base-link__icon {
    transform: translateX(0.4em);
  }

  .base-link__icon {
    transition: transform 0.4s ease-in-out;
  }
}
</style>
