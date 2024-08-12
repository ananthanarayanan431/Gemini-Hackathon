<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <router-link to="/" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-500 text-lg">Food Nutrition Info</span>
              </router-link>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <router-link to="/" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Home</router-link>
              <router-link to="/about" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">About</router-link>
              <router-link to="/contact" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Contact</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup>
// No setup needed here anymore
</script>