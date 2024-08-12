<!-- src/views/Home.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block">Discover the Power of</span>
          <span class="block text-green-600">Nutritional Knowledge</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Upload a food image and unlock a world of nutritional insights. Make informed decisions about your diet with just a snap!
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div class="md:flex items-center">
          <div class="md:flex-shrink-0 p-6 bg-green-500">
            <div class="flex items-center justify-center h-32 w-32 bg-green-400 rounded-xl">
              <svg class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div class="p-6 flex-grow">
            <h2 class="text-xl font-bold text-gray-900 mb-2">Upload Your Food Image</h2>
            <p class="text-gray-600 mb-4">Take a clear photo of your meal or upload an existing image.</p>
            <ImageUpload @image-uploaded="handleImageUpload" />
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="mt-8 text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-900"></div>
        <p class="mt-4 text-xl font-semibold text-gray-700">Analyzing your food image...</p>
      </div>

      <div v-if="error" class="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
            <p class="mt-2 text-sm text-red-700">Please try uploading a different image or try again later.</p>
          </div>
        </div>
      </div>

      <div v-if="uploadedImage" class="mt-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Uploaded Image</h3>
        <div class="bg-white p-4 rounded-2xl shadow-lg inline-block">
          <img :src="uploadedImage" alt="Uploaded food" class="w-48 h-48 object-cover rounded-xl" />
        </div>
      </div>

      <FoodDetails v-if="foodData" :foodData="foodData" class="mt-8" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ImageUpload from '../components/ImageUpload.vue';
import FoodDetails from '../components/FoodDetails.vue';
import { identifyFood } from '../services/geminiApi';

const foodData = ref(null);
const isLoading = ref(false);
const error = ref(null);
const uploadedImage = ref(null);

const handleImageUpload = async (imageFile) => {
  isLoading.value = true;
  error.value = null;
  foodData.value = null;
  uploadedImage.value = URL.createObjectURL(imageFile);
  try {
    const result = await identifyFood(imageFile);
    foodData.value = result;
  } catch (err) {
    console.error('Error identifying food:', err);
    error.value = "Failed to identify the food. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
</script>