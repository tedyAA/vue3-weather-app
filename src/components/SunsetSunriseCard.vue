<template>
  <div class="flex justify-center">
    <!-- Displays loader while weather data is still loading -->
    <SunsetSunriseCardLoading v-if="store.loading" />
    <div v-else
         class="flex py-2 px-6 shadow-[3px_6px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.25)] rounded-[32px] w-fit justify-center">
      <!--      Sunrise icon-->
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             class="bi bi-sunrise text-white w-5 h-5 md:w-[50px] md:h-[50px] my-auto"
             viewBox="0 0 16 16">
          <path
            d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
        </svg>
        <span class="ml-1 mr-1" />
        <!--        Displays sunrise time from api response data-->
        <p class="text-white md:text-2xl my-auto">{{ timeBuilder(sunrise) }}</p>
      </div>
      <span class="ml-1 mr-1" />
      <p class="text-white md:text-2xl my-auto hidden sm:block"> - - - </p>
      <p class="text-white md:text-2xl my-auto sm:hidden">-</p>
      <span class="ml-1 mr-1" />
      <div class="flex">
        <!--      Sunset icon-->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             class="bi bi-sunset text-white w-5 h-5 md:w-[50px] md:h-[50px] my-auto"
             viewBox="0 0 16 16">
          <path
            d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
        </svg>
        <span class="ml-1 mr-1" />
        <!--        Displays sunset time from api response data-->
        <p class="text-white md:text-2xl my-auto">{{ timeBuilder(sunset) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Simple component that displays sunrise and sunset data from weather response

import { timeBuilder } from '@/helpers/index.js'
import { defineProps } from '../../.vite/deps/chunk-5QRJQEQG.js'
import SunsetSunriseCardLoading from '@/components/loading/SunsetSunriseCardLoading.vue'
import { useWeatherStore } from '@/stores/weather.js'

const store = useWeatherStore()

defineProps({
  sunset: Number,
  sunrise: Number
})
</script>
