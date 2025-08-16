<template>
  <p class="text-center font-bold text-2xl font-merriweather text-white mt-8">Ooops!</p>
<p class="text-white font-extrabold text-9xl text-center font-merriweather">{{store.errorCode}}</p>
  <p class="text-center font-bold text-2xl font-merriweather text-white">{{store.errorMessage}}</p>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weather.js'
const store = useWeatherStore()
</script>

<style scoped>

</style>
