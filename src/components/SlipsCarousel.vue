<template>
  <div class="slips-carousel">
    <div
      v-if="showNavigation"
      class="slips-carousel__navigation"
    >
      <HandleIcons
        type="arrow_left"
        classType="carousel"
        @click="handleClick(false)"
      />
    </div>
    <div class="slips-carousel__content">
      <SlipsCarouselItem
        v-for="(slip, index) in slips"
        :key="slip.id"
        :class="{ active: index === active }"
        :slip="slip.advice"
        @click="log(index)"
      />
    </div>
    <div
      v-if="showNavigation"
      class="slips-carousel__navigation"
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
import { ref, computed, defineExpose } from 'vue';
import { useStore } from 'vuex';
import HandleIcons from '@/components/HandleIcons.vue';
import SlipsCarouselItem from '@/components/SlipsCarouselItem.vue';

// Define state
const store = useStore();
const active = ref(0);

// Define computed properties
const slips = computed(() => store.getters.getSlips);
const showNavigation = computed(() => slips.value.length >= 2);
const getActiveSlip = computed(() => slips.value[active.value]);

// Define methods
function handleClick(slideRight) {
  const offset = (slideRight) ? 1 : -1;

  active.value += offset;

  if (active.value <= -1) active.value = slips.value.length - 1;
  if (active.value >= slips.value.length) active.value = 0;
}

// Expose active slip
defineExpose({
  getActiveSlip,
});
</script>

<style lang="scss" scoped>
.slips-carousel {
  @include flex-wrapper($align: center, $justify: center);
  column-gap: 1em;
  width: 100%;
  max-width: $carousel-max-width;
  min-height: 20em;

  .slips-carousel__content {
    display: grid;
    place-content: center;
    @include position($pos: relative);
    width: 100%;
    height: 100%;
  }

  .slips-carousel__navigation {
    @include base-transition(background-color);
    border-radius: calc($carousel-icon-size / 2);
    cursor: pointer;

    &:hover {
      background: $background-hover;
    }
  }
}

.active {
  position: relative;
  opacity: 1;

  @media print {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    background: $background-element;
  }
}
</style>
