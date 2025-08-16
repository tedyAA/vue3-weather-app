<template>
  <div class="wrapper p-4">
    <SearchBox @getWeather="getWeather"/>
    <ErrorBox v-if="store.error"/>
    <WeatherCard v-if="hasWeather && !store.error"/>
  </div>
</template>

<script setup>
import SearchBox from '@/components/SearchBox.vue'
import { useWeatherStore } from '@/stores/weather.js'
import { computed, onMounted, ref } from 'vue'
import ErrorBox from '@/components/ErrorBox.vue'
import WeatherCard from '@/components/WeatherCard.vue'
import { isEmpty } from 'lodash'

const beforeCity = ref('sofia')
const store = useWeatherStore()

const { fetchWeather } = store

onMounted(() => {
  fetchWeather(beforeCity.value)
})

function getWeather(city) {
  fetchWeather(city)
}

const hasWeather = computed(() => !isEmpty(store.weatherData))

</script>
<style scoped>
.wrapper{
  padding: 40px;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/images/clouds.jpg");
}
</style>
