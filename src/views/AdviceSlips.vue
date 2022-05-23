<template>
  <div class="advice-slips">
    <!-- <SearchInputTerm/> -->
    <BaseCarousel
      :slips="[{
        'id': 203,
        'advice': 'The best sex is fun.',
        'date': '2017-02-26'
      },
      {
        'id': 212,
        'advice': 'Life is fun.',
        'date': '2018-12-26'
      },
      {
        'id': 204,
        'advice': 'The best nights out are when people around you are simply having fun.',
        'date': '2016-02-20'
      }]"
    />
    <!-- <BaseButton
      text="Get a random slip"
      icon="leaf"
      @click="handleClick()"
    /> -->
  </div>
</template>

<script setup>
/* eslint-disable */
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import SearchInputTerm from '@/components/SearchInputTerm.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCarousel from '@/components/BaseCarousel.vue';

// Define state
const store = useStore();

// Define computed properties
const slips = computed(() => store.getters.getSlips);

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
  padding-top: 10em;
}
</style>
