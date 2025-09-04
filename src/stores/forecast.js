import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useForecastStore = defineStore('forecast', () => {
  // Replace with your OpenWeather API key :)
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Replace with your OpenWeather API key :)
  // Forecast data stored here
  const forecastData = ref(null)
  // Flag used to check if data still loading
  const loading = ref(false)
  // Contains error message if there is one
  const error = ref(null)


  async function fetchForecast(city) {
    loading.value = true
    error.value = false

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
      forecastData.value = await res.json()
      forecastData.value = forecastData.value.list.filter((item) => forecastData.value.list.indexOf(item) % 8 === 0)

    } catch (err) {
      error.value = err.message
    } finally {
      // This delay is used to show loading components

      setTimeout(() => {
        loading.value = false
      }, 3000)
    }
  }

  const forecast = computed(() => {
    return forecastData
  })

  return {
    fetchForecast,
    forecastData,
    loading,
    error,
    forecast
  }
})
