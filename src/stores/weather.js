import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const apiKey = '1cf838aa8644549473bdf55ad4147ca1' // Replace with your OpenWeather API key :)

  const weatherData = ref(null)

  const loading = ref(false)
  const error = ref(null)

  async function fetchWeather(city) {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      weatherData.value = await res.json()
      
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    weatherData,
    loading,
    error,
    fetchWeather,
  }
})
