<!-- src/components/ImageUpload.vue -->
<template>
  <div class="mb-4">
    <label
      for="image-upload"
      class="flex justify-center items-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
    >
      <span class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <span class="font-medium text-gray-600">
          Drop files to Attach, or
          <span class="text-blue-600 underline">browse</span>
        </span>
      </span>
      <input
        type="file"
        id="image-upload"
        name="image-upload"
        accept="image/*"
        class="hidden"
        @change="handleFileChange"
      />
    </label>
    <p v-if="selectedFile" class="mt-2 text-sm text-gray-500">
      Selected file: {{ selectedFile.name }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['image-uploaded']);
const selectedFile = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    emit('image-uploaded', file);
  }
};
</script>