<template>
  <WeatherCardLoading v-if="store.loading"/>
  <div class="weather-wrap" v-else>
    <div class="text-center">
      <div class="text-white text-6xl font-medium text-center mt-5">{{ cityName }}</div>
      <div class="text-white text-[20px] font-light italic text-center">{{ dateBuilderDDMY() }}</div>
    </div>
    <div class="flex justify-center">
      <div class="flex justify-center w-fit px-[35px] py-[10px] text-white text-[70px] md:text-[102px] font-black shadow-[3px_6px_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.25)] rounded-[16px] my-[30px]">
        <img
          :src="`https://openweathermap.org/img/wn/${store.weatherData.weather[0].icon}@2x.png`"
          :alt="store.weatherData.weather[0].description"
          class="w-full my-auto h-full"
        />
        <p>{{ weatherTemp }}°C</p>
      </div>
    </div>
<!--    <p>Feels Like {{ feelsLikeTemp }}°C</p>-->
    <div class="text-white text-center text-[48px] font-bold italic">{{ weatherProg }}</div>
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

const feelsLikeTemp = computed(() => Math.round(store.weatherData.main.feels_like))
</script>

<style scoped>

</style>
