<template>
  <div class="mt-5 flex flex-row">
    <input
      class="block w-full p-4 text-[#313131] text-[20px] appearance-none border-0 outline-none bg-none shadow-[0_0_8px_rgba(0,0,0,0.25)] bg-white/50 rounded-[0_16px_0_16px] transition-all duration-400 "
      placeholder="Search..."
      v-model="city"
      @keyup.enter="$emit('getWeather',city)"
    />
    <button class="btn btn-success px-4 mx-2 border-2 shadow-[0_0_8px_rgba(0,0,0,0.25)] bg-white/50 rounded-[0_16px_0_16px]" @click="$emit('getWeather',city)" >Search</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const city = ref('')
</script>

