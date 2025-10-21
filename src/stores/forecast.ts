import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

interface WeatherItem {
  dt: number;
  main: {
    temp: number;
    humidity: number;
    [key: string]: any;
  };
  weather: { main: string; description: string; icon: string }[];
  wind: { speed: number };
  [key: string]: any;
}

interface ForecastResponse {
  list: WeatherItem[];
  city?: {
    name: string;
    country: string;
  };
}

export const useForecastStore = defineStore('forecast', () => {
  // Replace with your OpenWeather API key :)
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY as string;

  // Forecast data stored here
  const forecastData = ref<WeatherItem[] | null>(null);
  // Flag used to check if data is still loading
  const loading = ref(false);
  // Contains error message if there is one
  const error = ref<string | null>(null);

  async function fetchForecast(city: string) {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      const data: ForecastResponse = await res.json();

      if (!data.list) {
        throw new Error('No forecast data found');
      }

      // Filter to get one forecast per day (every 8th item)
      forecastData.value = data.list.filter((_, index) => index % 8 === 0);

    } catch (err: any) {
      error.value = err.message || 'Failed to fetch forecast';
      forecastData.value = null;
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    }
  }

  const forecast = computed(() => forecastData);

  return {
    fetchForecast,
    forecastData,
    loading,
    error,
    forecast,
  };
});
