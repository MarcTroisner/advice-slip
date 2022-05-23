<template>
  <div class="base-carousel">
    <div
      v-if="showNavigation"
      class="base-carousel__navigation"
    >
      <HandleIcons
        type="arrow_left"
        classType="carousel"
        @click="handleClick(false)"
      />
    </div>
    <div class="base-carousel__content">
      <BaseCarouselItem
        v-for="(slip, index) in slips"
        :key="slip.id"
        :class="{ active: index === active }"
        :slip="slip.advice"
        @click="log(index)"
      />
    </div>
    <div
      v-if="showNavigation"
      class="base-carousel__navigation"
    >
      <HandleIcons
        type="arrow_right"
        classType="carousel"
        @click="handleClick(true)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
import HandleIcons from '@/components/HandleIcons.vue';
import BaseCarouselItem from '@/components/BaseCarouselItem.vue';

// Define props
const props = defineProps({
  slips: {
    type: Array,
    required: true,
  },
});

// Define state
const active = ref(0);

// Define computed properties
const showNavigation = computed(() => props.slips.length >= 2);

// Define methods
function handleClick(slideRight) {
  const { slips } = props;
  const offset = (slideRight) ? 1 : -1;

  active.value += offset;

  if (active.value <= -1) active.value = slips.length - 1;
  if (active.value >= slips.length) active.value = 0;
}
</script>

<style lang="scss" scoped>
.base-carousel {
  @include flex-wrapper($align: center, $justify: center);
  column-gap: 1em;
  width: 100%;
  max-width: $carousel-max-width;
  min-height: 10em;

  .base-carousel__content {
    display: grid;
    place-content: center;
    @include position($pos: relative);
    width: 100%;
    height: 100%;
  }

  .base-carousel__navigation {
    border-radius: calc($carousel-icon-size / 2);
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background: $background-hover;
    }
  }
}

.active {
  opacity: 1;
}
</style>
