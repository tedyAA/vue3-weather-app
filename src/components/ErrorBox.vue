<template>
  <p class="text-center font-bold text-2xl font-merriweather text-white mt-8">Ooops!</p>
  <!--  Display error code from store-->
  <p class="text-white font-extrabold text-9xl text-center font-merriweather">
    {{ store.errorCode }}</p>
  <!--  Display error message from store-->
  <p class="text-center font-bold text-2xl font-merriweather text-white">
    {{ store.errorMessage }}</p>
</template>

<script setup>
// A simple component that shows an error state when a weather API call fails.

import { useWeatherStore } from '@/stores/weather.js'

const store = useWeatherStore()
</script>
