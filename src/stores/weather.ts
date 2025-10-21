import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useForecastStore } from '@/stores/forecast.js'

interface Weather {
  name: string;
  dt: number;
  main: {
    temp: number;
    humidity: number;
    [key: string]: any;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: { main: string; description: string; icon: string }[];
  wind: { speed: number };
  [key: string]: any;
}

export const useWeatherStore = defineStore('weather', () => {
  // Replace with your OpenWeather API key :)
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY as string;

  // Weather data stored here
  const weatherData = ref<Weather | null>(null);

  // Flag used to check if data is still loading
  const loading = ref(false);

  // Contains error if there is one
  const error = ref(false);

  // Contains error code if there is one
  const errorCode = ref<number | null>(null);

  // Contains error message if there is one
  const errorMessage = ref<string | null>(null);

  async function fetchWeather(city: string) {
    loading.value = true;
    error.value = false;
    errorCode.value = null;
    errorMessage.value = null;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) {
        errorCode.value = res.status;
        errorMessage.value = res.statusText;
        error.value = true;
        return;
      }

      weatherData.value = await res.json();
    } catch (err: any) {
      console.error(err);
      error.value = true;
      errorMessage.value = err.message || 'Failed to fetch weather';
    } finally {
      // Fetch forecast data using Forecast store
      const forecastStore = useForecastStore();
      await forecastStore.fetchForecast(city);

      // Optional delay to show loading components
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    }
  }

  return {
    weatherData,
    loading,
    error,
    errorCode,
    errorMessage,
    fetchWeather,
  };
});
