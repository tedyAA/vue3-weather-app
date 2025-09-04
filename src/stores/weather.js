import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useForecastStore } from '@/stores/forecast.js'

export const useWeatherStore = defineStore('weather', () => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Replace with your OpenWeather API key :)
  // Weather data stored here
  const weatherData = ref(null)

  // Flag used to check if data still loading
  const loading = ref(false)
  // Contains error if there is one
  const error = ref(false)
  // Contains error code if there is one
  const errorCode = ref(null)
  // Contains error message if there is one
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
