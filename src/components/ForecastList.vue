<template>
  <div class="flex justify-center mt-10" v-if="hasForecast">
    <div class="grid w-fit gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <div v-for="(item, index) in store.forecastData" :key="index" class="flex items-center justify-center">
        <ForecastCard :forecast="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForecastStore } from '@/stores/forecast.js'
import ForecastCard from '@/components/ForecastCard.vue'
import { isEmpty } from 'lodash'
import { computed } from 'vue'

const store = useForecastStore()

const hasForecast = computed(() => !isEmpty(store.forecastData))
</script>
