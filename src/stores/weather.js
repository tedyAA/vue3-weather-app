import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useForecastStore } from '@/stores/forecast.js'

export const useWeatherStore = defineStore('weather', () => {
  const apiKey = '1cf838aa8644549473bdf55ad4147ca1' // Replace with your OpenWeather API key :)

  const weatherData = ref(null)

  const loading = ref(false)
  const error = ref(false)
  const errorCode = ref(null)
  const errorMessage = ref(null)

  async function fetchWeather(city) {
    loading.value = true
    error.value = false
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      if (!res.ok) {
        errorCode.value = res.status
        errorMessage.value = res.statusText
        error.value = true
      }

      weatherData.value = await res.json()
    } catch (err) {
      console.log(err)
    } finally {
      const forecastStore = useForecastStore()
      await forecastStore.fetchForecast(city)

      // This delay is only for one purpose
      // to show loading components
      
      setTimeout(() => {
        loading.value = false
      }, 3000);
    }
  }

  return {
    weatherData,
    loading,
    error,
    fetchWeather,
    errorCode,
    errorMessage,
  }
})
