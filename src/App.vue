<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"/>
  </router-view>
  <TheFooter/>
</template>

<script setup>
import { watch, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';

// Define state
const store = useStore();
const router = useRouter();

// Define computed properties
const appStatus = computed(() => store.getters.getStatus);

// Define watchers
watch(appStatus, (newStatus) => {
  // React to status changes
  if (newStatus === 'ERROR') router.push({ name: 'FetchError' });
  if (newStatus === 'PENDING') router.push({ name: 'AdviceSlips' });
});
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  width: 100vw;
}
</style>
