<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"/>
  </router-view>
  <TheFooter/>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue';
</script>

<style lang="scss">
/* HAS TO BE HERE IF NO CSS IS WRITTEN HERE */
</style>
