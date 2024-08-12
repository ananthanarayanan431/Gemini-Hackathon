<!-- src/views/Contact.vue -->
<template>
    <div class="py-12 bg-gradient-to-b from-green-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-green-600 font-semibold tracking-wide uppercase">Reach Out to Us</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're here to assist with any questions or concerns you may have. We're eager to connect with you!
          </p>
        </div>
  
        <div class="mt-10 bg-white rounded-lg shadow-xl p-6 md:p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-gray-600">ananthanarayanan431@gmail.com</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-gray-600">+91 9999999999 (dummy)</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-600">Navi Mumbai, India</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
              <form class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
                </div>
                <div>
                  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div class="mt-16 bg-green-100 rounded-lg shadow-xl p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-medium text-gray-900">How accurate is the nutritional information?</h4>
              <p class="mt-2 text-gray-600">Our service provides highly accurate nutritional information based on extensive food databases and advanced analysis techniques. However, please note that results may vary slightly depending on specific ingredients and preparation methods.</p>
            </div>
            <div>
              <h4 class="text-lg font-medium text-gray-900">Can I use this service for all types of food?</h4>
              <p class="mt-2 text-gray-600">Yes! Our service can analyze a wide variety of foods, including home-cooked meals, restaurant dishes, and packaged foods. However, for very unique or specialized dishes, the accuracy may be slightly reduced.</p>
            </div>
            <div>
              <h4 class="text-lg font-medium text-gray-900">Is my data kept private?</h4>
              <p class="mt-2 text-gray-600">Absolutely. We take your privacy very seriously. The images you upload and the information we provide are not stored or shared with any third parties. Please refer to our privacy policy for more details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>