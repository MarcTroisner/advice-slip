<template>
  <div class="advice-slips">
    <SearchInputTerm/>
    <SlipsCarousel
      ref="download"
      v-if="showLoading === false && noResults === false"
    />
    <BaseLoading v-else-if="showLoading"/>
    <h2
      class="advice-slips__no-results"
      v-else-if="noResults"
    >
      Looks like we don't have advice for THAT.
    </h2>
    <div class="advice-slips__buttons">
      <BaseButton
        text="Get a random slip"
        icon="leaf"
        @click="handleClick()"
      />
      <BaseButtonAction
        text="Download as PDF"
        icon="download"
        @click="handleDownload()"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { jsPDF } from 'jspdf';
import SearchInputTerm from '@/components/SearchInputTerm.vue';
import BaseButton from '@/components/BaseButton.vue';
import SlipsCarousel from '@/components/SlipsCarousel.vue';
import BaseLoading from '@/components/BaseLoading.vue';
import BaseButtonAction from '@/components/BaseButtonAction.vue';

// Define state
const store = useStore();
const download = ref(null);

// Define computed properties
const noResults = computed(() => store.getters.getNoResults);
const showLoading = computed(() => store.getters.getStatus === 'PENDING');

// Define methods
function handleClick() {
  store.dispatch('getSlips');
}

function handleDownload() {
  const { id, advice } = download.value.getActiveSlip; // eslint-disable-line

  // Create new doc and populate with text
  const doc = new jsPDF({
    orientation: 'landscape',
    format: 'a4',
  });

  // Font config
  doc.setFont('Courier');
  doc.setFontSize(50);

  // Calculate page center for text alignment
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();

  const offsetX = pageWidth / 2;
  const offsetY = (pageHeight / 2) - (doc.getFontSize() / 2);

  // Wrap text to fit page
  const adviceSplit = doc.splitTextToSize(advice.toString(), 200);

  doc.text(adviceSplit, offsetX, offsetY, 'center');
  doc.save(`advice_slip_${id}.pdf`);
}

// Define lifecycle hooks
onBeforeMount(() => {
  store.dispatch('getSlips');
});
</script>

<style lang="scss" scoped>
.advice-slips {
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  row-gap: 2em;
  height: 100%;

  .advice-slips__no-results {
    align-self: center;
  }

  .advice-slips__buttons {
    @include flex-wrapper($direction: column, $align: center);
    row-gap: 1em;
  }
}
</style>
