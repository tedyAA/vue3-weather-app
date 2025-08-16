<template>
  <div class="wrapper p-4">
    <SearchBox @getWeather="getWeather"/>
    <ErrorBox v-if="store.error"/>
  </div>
</template>

<script setup>
import SearchBox from '@/components/SearchBox.vue'
import { useWeatherStore } from '@/stores/weather.js'
import { onMounted, ref } from 'vue'
import ErrorBox from '@/components/ErrorBox.vue'

const beforeCity = ref('sofia')
const store = useWeatherStore()

const { fetchWeather } = store

onMounted(() => {
  fetchWeather(beforeCity.value)
})

function getWeather(city) {
  fetchWeather(city)
}

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
