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
  column-gap: 0.8em;

  &::before, &::after {
    content: '';
    height: 0.1em;
    background: $border-link;
    border-radius: 0.05em;
    transition: width 0.3s ease-in-out;
  }

  &::before {
    @include position($bottom: 0, $left: 0);
    width: 1.5em;
  }

  &::after {
    @include position($bottom: 0, $right: 0);
    width: 0;
  }

  &:hover::before {
    @include position($bottom: 0, $left: 0);
    width: 1em;
  }

  &:hover::after {
    @include position($bottom: 0, $right: 0);
    width: calc(100% - 1.5em);
  }
}
</style>
