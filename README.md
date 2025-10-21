# 🌦️ Vue 3 Weather App

> A sleek, modern and responsive weather dashboard built with **Vue 3**, **Pinia**, and **Tailwind CSS**, fetching real-time data from the **OpenWeather API**.  
> Displays current conditions and a 5-day forecast — beautifully animated, responsive, and lightning fast ⚡.

---
<img width="1909" height="970" alt="image" src="https://github.com/user-attachments/assets/0f64e4e1-b7cb-4f7d-9962-b3c596861b8a" />

## 🌟 Features

✅ **Current Weather**  
Displays the current city name, temperature, weather icon, and conditions in real-time.

🌤 **5-Day Forecast**  
Shows temperature ranges, weather icons, and formatted daily timestamps.

📱 **Responsive Design**  
Built with Tailwind CSS for a fully mobile-friendly, adaptive layout.

💨 **Smooth Loading States**  
Includes skeletons and pulsing loaders for a polished user experience.

🚨 **Error Handling**  
Custom error boxes display meaningful messages when the API fails or returns invalid data.

---

## 🧠 Tech Stack

- ⚙️ **Vue 3** (Composition API + `<script setup>`)
- 🗂 **Pinia** (State Management)
- 💅 **Tailwind CSS** (Responsive Styling)
- 🌤 **OpenWeather API** (Weather Data)
- 🚀 **Vite** (Lightning-fast Dev & Build)

---

## 🧰 Project Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/vue3-weather-app.git
cd vue3-weather-app
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### 🔑 OpenWeather API Key Setup
To make API calls work, create an .env.development file in your project root and add your API key:

```sh
VITE_OPENWEATHER_API_KEY=your_api_key_here
```
