<template>
  <WeatherCardLoading v-if="store.loading"/>
  <div class="weather-wrap" v-else>
    <div class="text-center">
      <div class="text-white text-6xl font-medium text-center mt-5">{{ cityName }}</div>
      <div class="text-white text-[20px] font-light italic text-center">{{ dateBuilderDDMY() }}</div>
    </div>
    <div class="text-center">
      <div class="inline-block px-[25px] py-[10px] text-white text-[102px] font-black shadow-[3px_6px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.25)] rounded-[16px] my-[30px]">
        <p>{{ weatherTemp }}°C</p>
        <img
          :src="`https://openweathermap.org/img/wn/${store.weatherData.weather[0].icon}@2x.png`"
          :alt="store.weatherData.weather[0].description"
          class="mx-auto"
        />
      </div>
      <div class="text-white text-[48px] font-bold italic">{{ weatherProg }}</div>
    </div>
  </div>
</template>

<script setup>

import { dateBuilderDDMY } from '@/helpers/index.js'
import { computed } from 'vue'
import { useWeatherStore } from '@/stores/weather.js'
import WeatherCardLoading from '@/components/loading/WeatherCardLoading.vue'
const store = useWeatherStore()

const cityName = computed(() => store.weatherData.name)

const weatherProg = computed(() => store.weatherData.weather[0].description)

const weatherTemp = computed(() => Math.round(store.weatherData.main.temp))
</script>

<style scoped>

</style>
