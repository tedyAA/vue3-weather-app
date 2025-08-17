<template>
  <div class="wrapper p-4">
    <SearchBox @getWeather="getWeather"/>
    <ErrorBox v-if="store.error"/>
    <WeatherCard v-if="hasWeather && !store.error"/>
    <SunsetSunriseCard v-if="hasWeather && !store.error" :sunset="store.weatherData.sys.sunset" :sunrise="store.weatherData.sys.sunrise" :dt="store.weatherData.dt"/>
    <ForecastList v-if="hasForecast && !store.error"/>
  </div>
</template>

<script setup>
import SearchBox from '@/components/SearchBox.vue'
import { useWeatherStore } from '@/stores/weather.js'
import { computed, onMounted, ref } from 'vue'
import ErrorBox from '@/components/ErrorBox.vue'
import WeatherCard from '@/components/WeatherCard.vue'
import { isEmpty } from 'lodash'
import ForecastList from '@/components/ForecastList.vue'
import SunsetSunriseCard from '@/components/SunsetSunriseCard.vue'
import { useForecastStore } from '@/stores/forecast.js'

// The main component that checks if weather and forecast are present and loads all
// the app components
const beforeCity = ref('sofia')
const store = useWeatherStore()

const forecastStore = useForecastStore()

const { fetchWeather } = store

onMounted(() => {
  fetchWeather(beforeCity.value)
})

function getWeather(city) {
  fetchWeather(city)
}

const hasWeather = computed(() => !isEmpty(store.weatherData))

const hasForecast = computed(() => !isEmpty(forecastStore.forecastData))

</script>
<style scoped>
.wrapper {
  padding: 40px;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/images/clouds.jpg");

  @media (max-width: 700px) {
    min-height: 100% !important;
  }
}
</style>
