<template>
  <form class="search-input__term" @submit.prevent="handleSubmit()">
    <label
      class="search-input__term-input"
      for="seach"
    >
      <input
        type="text"
        name="search"
        placeholder="Search for term"
        v-model="input"
      />
    </label>
    <HandleIcons
      v-if="showIcon"
      @click="clearInput()"
      class="search-input__term-icon"
      classType="base"
      type="clear"
    />
  </form>
  <div v-if="invalidInput" class="search-input__term-error">
    <p class="error">Only single-word terms are supported.</p>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
import HandleIcons from '@/components/HandleIcons.vue';

// Define emitted events
const emit = defineEmits(['submit']);

// Define local state
const input = ref('');

// Define computed properties
const showIcon = computed(() => input.value !== '');
const invalidInput = computed(() => input.value.split(' ').length !== 1);

// Define methods
function clearInput() {
  input.value = '';
}

function handleSubmit() {
  if (invalidInput.value) return;

  emit('submit', input);
}
</script>

<style lang="scss" scoped>
.search-input__term {
  @include flex-wrapper($align: center);
  @include position($pos: relative);
  padding: 0 2.5em;
  width: fit-content;
  max-width: $base-search-input-max-width;
  height: $base-search-input-height;
  border-bottom-width: $base-search-input-border;
  border-bottom-style: solid;
  border-bottom-color: $border-input;
  transition: border-color 0.2s ease-in-out;

  &:focus-within {
    border-bottom-color: $border-input-active;
  }

  .search-input__term-input {
    height: 100%;
  }

  .search-input__term-icon {
    @include position($pos: absolute, $top: 50%, $right: 1em);
    transform: translateY(-50%);
  }
}

.search-input__term-error {
  margin-top: 0.8em;
}
</style>
