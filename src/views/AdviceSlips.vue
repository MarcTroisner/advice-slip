<template>
  <div class="advice-slips">
    <SearchInputTerm/>
    <h4>Some advice for you:</h4>
    <div class="advice-slips__active-slip">
      <!-- <SlipItem
        :slips="$store.getters.getSlips"
      /> -->
    </div>
    <BaseButton
      text="Get a random slip"
      icon="leaf"
    />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import SearchInputTerm from '@/components/SearchInputTerm.vue';
import BaseButton from '@/components/BaseButton.vue';

const store = useStore();

onBeforeMount(() => {
  store.dispatch('getSlips');
});
</script>
