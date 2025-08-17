<template>
  <div class="flex justify-center mt-10">
    <!-- Displays loader while the forecast data is still loading -->
    <ForecastCardLoading v-if="store.loading" />
    <!--    Loops through forecast if available and renders ForecastCard-->
    <div v-else class="grid w-fit gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <div v-for="(item, index) in store.forecastData" :key="index"
           class="flex items-center justify-center">
        <ForecastCard :forecast="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Simple list component for forecast display

import { useForecastStore } from '@/stores/forecast.js'
import ForecastCard from '@/components/ForecastCard.vue'
import ForecastCardLoading from '@/components/loading/ForecastCardLoading.vue'

const store = useForecastStore()
</script>
