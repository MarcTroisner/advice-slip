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
#app {
  height: 100vh;
  width: 100vw;
  padding: 0 10vw;
  padding-bottom: $footer-height;
}
</style>
