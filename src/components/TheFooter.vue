<template>
  <footer class="footer">
    <p>Lovely advice for lovely people</p>
    <HandleIcons type="heart"/>
  </footer>
</template>

<script setup>
import HandleIcons from '@/components/HandleIcons.vue';
</script>

<style lang="scss" scoped>
.footer {
  @include flex-wrapper($align: center, $justify: center);
  @include position($pos: fixed, $bottom: 0, $left: 0);
  width: 100vw;
  height: $footer-height;
  column-gap: 0.8em;
  background: $background-footer;
  box-shadow: $shadow-footer;
}
</style>
