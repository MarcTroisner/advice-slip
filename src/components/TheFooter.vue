<template>
  <footer class="footer">
    <p>Lovely advice for lovely people</p>
    <HandleIcons type="heart" classType="default-size"/>
  </footer>
</template>

<script setup>
import HandleIcons from '@/components/HandleIcons.vue';
</script>

<style lang="scss" scoped>
.footer {
  @include flex-wrapper($align: center, $justify: center);
  width: 100vw;
  height: $footer-height;
  column-gap: 0.8em;
  background: $background-footer;
  box-shadow: $shadow-footer;
}
</style>
