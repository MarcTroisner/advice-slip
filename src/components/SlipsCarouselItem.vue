<template>
  <div class="slips-carousel-item">
    <h2>{{ slip }}</h2>
    <p class="slips-carousel-item__author">{{ author }}</p>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import authors from '@/assets/authors.json';

// Define props
defineProps({
  slip: {
    type: String,
    required: true,
  },
});

// Define computed properties
const author = computed(() => {
  const { placeholders } = authors;

  return placeholders[Math.floor(Math.random() * placeholders.length)];
});
</script>

<style lang="scss" scoped>
.slips-carousel-item {
  @include flex-wrapper($direction: column, $align: center, $justify: center);
  @include position($pos: absolute, $top: 0, $left: 0);
  @include base-transition(opacity, 0.5s);
  z-index: -1;
  opacity: 0;
  row-gap: 1.2em;
  width: 100%;
  height: 100%;

  h2::before, h2::after {
    content: '"';

    @media print {
      content: '';
    }
  }

  .slips-carousel-item__author {
    font-weight: 300;
    font-style: italic;
    font-size: 0.8rem;
    color: $font-author;
    align-self: flex-end;

    @media print {
      display: none;
    }

    &::before {
      content: '~ ';
    }
  }
}
</style>
