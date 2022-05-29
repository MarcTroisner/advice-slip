<template>
  <form class="search-input-term" @submit.prevent="handleSubmit()">
    <label
      class="search-input-term__input"
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
      class="search-input-term__icon"
      classType="base"
      type="clear"
    />
  </form>
  <div v-if="showError" class="search-input-term__error">
    <p class="error">Only single-word terms are supported.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import HandleIcons from '@/components/HandleIcons.vue';

// Define local state
const input = ref('');
const store = useStore();

// Define computed properties
const showIcon = computed(() => input.value !== '');
const showError = computed(() => input.value.split(' ').length !== 1);

// Define methods
function clearInput() {
  input.value = '';
}

function handleSubmit() {
  if (showError.value || input.value === '') return;

  store.dispatch('getSlips', { search: input.value });
}
</script>

<style lang="scss" scoped>
.search-input-term {
  @include flex-wrapper($align: center);
  @include position($pos: relative);
  @include base-transition(border-color, 0.2s);
  padding: 0 2.5em;
  width: fit-content;
  max-width: $search-input-max-width;
  height: $search-input-height;
  background: $background-element;
  border-bottom-width: $search-input-border;
  border-bottom-style: solid;
  border-bottom-color: $border-input;

  &:focus-within {
    border-bottom-color: $border-input-active;
  }

  .search-input-term__input {
    height: 100%;
  }

  .search-input-term__icon {
    @include position($top: 50%, $right: 1em);
    transform: translateY(-50%);
  }
}

.search-input-term__error {
  margin-top: 0.8em;
}
</style>
