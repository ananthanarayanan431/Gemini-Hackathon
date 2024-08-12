<template>
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
    <div class="px-4 py-5 sm:px-6 bg-green-500">
      <h3 class="text-2xl leading-6 font-bold text-white">{{ foodData.name }}</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Calories</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ foodData.calories }}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Protein</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ foodData.protein }}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Carbohydrates</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ foodData.carbohydrates }}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Fat</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ foodData.fat }}</dd>
        </div>
      </dl>
    </div>

    <div class="px-4 py-5 sm:px-6">
      <h4 class="text-lg font-semibold text-gray-900 mb-3">Benefits</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Source of protein from cheese and potential meat toppings</li>
        <li>Contains vitamins and minerals from vegetable toppings</li>
        <li>Can provide carbohydrates for energy</li>
        <li>Versatile and can be made with various healthy ingredients</li>
      </ul>
    </div>

    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h4 class="text-lg font-semibold text-gray-900 mb-3">Limitations</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Often high in calories, especially with extra cheese or meat toppings</li>
        <li>Can be high in saturated fat and sodium</li>
        <li>May contain processed meats, which are not ideal for regular consumption</li>
        <li>White flour crust may not provide much fiber</li>
      </ul>
    </div>

    <div class="px-4 py-5 sm:px-6">
      <h4 class="text-lg font-semibold text-gray-900 mb-3">Suitable For</h4>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Most people as an occasional treat</li>
        <li>Active individuals who need quick energy</li>
        <li>Can be adapted for various dietary needs (e.g., vegetarian, gluten-free)</li>
        <li>Not ideal for those on low-carb or low-fat diets without modifications</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  foodData: {
    type: Object,
    required: true,
  },
});
</script>x``