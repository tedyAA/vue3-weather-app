<template>
  <div v-if="forecast" class="text-center inline-block px-[25px] py-[10px] text-white text-[16px] font-black shadow-[3px_6px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.25)] rounded-[16px]  mx-0 [text-shadow:3px_6px_rgba(0,0,0,0.25)]">
    <p class="text-white">{{dateBuilderDD(forecast.dt)}}</p>
    <img
      :src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"
      :alt="forecast.weather[0].description"
      class="mx-auto"
    />
    <p><span class="text-gray-300">{{kelvinToCelsius(forecast.main.temp_min)}}°</span> / {{kelvinToCelsius(forecast.main.temp_max)}}°</p>
  </div>
</template>

<script setup>

import { defineProps } from '../../.vite/deps/chunk-5QRJQEQG.js'
import { dateBuilderDD, kelvinToCelsius } from '../helpers/index.js'
defineProps({
  forecast: Object
});

</script>
