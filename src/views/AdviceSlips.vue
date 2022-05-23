<template>
  <div class="advice-slips">
    <SearchInputTerm/>
    <BaseCarousel
      v-if="showLoading === false"
      :slips="slips"
    />
    <BaseLoading v-else-if="showLoading"/>
    <BaseButton
      text="Get a random slip"
      icon="leaf"
      @click="handleClick()"
    />
  </div>
</template>

<script setup>
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import SearchInputTerm from '@/components/SearchInputTerm.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCarousel from '@/components/BaseCarousel.vue';
import BaseLoading from '@/components/BaseLoading.vue';

// Define state
const store = useStore();

// Define computed properties
const slips = computed(() => store.getters.getSlips);
const showLoading = computed(() => store.getters.getStatus === 'PENDING');

// Define methods
function handleClick() {
  store.dispatch('getSlips');
}

// Lifecycle hooks
onBeforeMount(() => {
  store.dispatch('getSlips');
});
</script>

<style lang="scss" scoped>
.advice-slips {
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  row-gap: 2em;
  height: 100%;
}
</style>
