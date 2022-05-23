<template>
  <div :class="classType">
    <svg v-if="type === 'leaf'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.82892 17.0806C2.58627 10.0095 8.24313 4.35268 18.8498 5.05981C19.5568 15.6663 13.9 21.3232 6.82892 17.0806Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 18.9093L10.6569 13.2524" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="type === 'clear'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 16L8 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 8L7.99997 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="type === 'arrow_left'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071C14.0976 15.3166 14.0976 14.6834 13.7071 14.2929L12.2929 15.7071ZM10 12L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071L10 12ZM13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L13.7071 9.70711ZM13.7071 14.2929L10.7071 11.2929L9.29289 12.7071L12.2929 15.7071L13.7071 14.2929ZM10.7071 12.7071L13.7071 9.70711L12.2929 8.29289L9.29289 11.2929L10.7071 12.7071Z" fill="black"/>
    </svg>
    <svg v-if="type === 'arrow_right'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289C9.90237 8.68342 9.90237 9.31658 10.2929 9.70711L11.7071 8.29289ZM14 12L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L14 12ZM10.2929 14.2929C9.90237 14.6834 9.90237 15.3166 10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L10.2929 14.2929ZM10.2929 9.70711L13.2929 12.7071L14.7071 11.2929L11.7071 8.29289L10.2929 9.70711ZM13.2929 11.2929L10.2929 14.2929L11.7071 15.7071L14.7071 12.7071L13.2929 11.2929Z"  fill="black"/>
    </svg>
    <svg v-if="type === 'download'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 21H18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 3L12 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 12L12 17L7 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="type === 'redo'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8H19V3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.7094 16.3571C17.7775 17.792 16.4102 18.8904 14.8082 19.4909C13.2062 20.0915 11.4538 20.1627 9.80833 19.6939C8.16287 19.2252 6.71103 18.2413 5.66595 16.8867C4.62086 15.5321 4.03759 13.8781 4.00176 12.1675C3.96593 10.457 4.47943 8.78004 5.46687 7.38284C6.45431 5.98564 7.86368 4.94181 9.48806 4.4046C11.1124 3.86738 12.8663 3.86509 14.492 4.39805C16.1178 4.93101 17.5299 5.97114 18.521 7.36575" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="type === 'arrow_link'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 7L21 12L16 17" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="type === 'heart'"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20C12 20 3 14.9875 3 8.97234C3 2.95722 10 2.45597 12 7.16221C14 2.45597 21 2.95722 21 8.97234C21 14.9875 12 20 12 20Z" stroke="#D33E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  type: {
    type: String,
    required: true,
  },
  classType: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.default-size {
  width: $base-icon-size;
  height: $base-icon-size;
}

.base {
  @extend .default-size;
  cursor: pointer;
  path {
    stroke: $fill-icons-base;
  }
}

.button {
  @extend .default-size;
  path {
    stroke: $fill-icons-button;
  }
}

.buttonDownload {
  @extend .default-size;
  path {
    stroke: $fill-icons-button-secondary;
  }
}

.link {
  @extend .default-size;
  path {
    stroke: $fill-icons-link;
  }
}

.carousel {
  width: $carousel-icon-size;
  height: $carousel-icon-size;
  path {
    fill: $fill-icons-base;
  }
}
</style>
