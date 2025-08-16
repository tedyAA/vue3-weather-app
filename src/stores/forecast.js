import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useForecastStore = defineStore('forecast', () => {
  const apiKey = '1cf838aa8644549473bdf55ad4147ca1' // Replace with your OpenWeather API key :)

  const forecastData = ref(null)
  const loading = ref(false)
  const error = ref(null)


  async function fetchForecast(city) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
      forecastData.value = await res.json()
      forecastData.value = forecastData.value.list.filter((item) =>forecastData.value.list.indexOf(item) % 8 === 0)

    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
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
