import axios from 'axios';

const GEMINI_API_KEY = 'AIzaSyAVE_Ie7OOl_Bbiq5FDrvB2p_mtVbPJrGM'
// src/services/geminiApi.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyAVE_Ie7OOl_Bbiq5FDrvB2p_mtVbPJrGM');

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
}

export async function identifyFood(imageFile) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const imageData = await fileToBase64(imageFile);
    
    const result = await model.generateContent([
      "Identify this food and provide its nutritional information including calories, protein, carbohydrates, and fat. Also, list its benefits, limitations, and who it's suitable for.",
      {
        inlineData: {
          data: imageData,
          mimeType: imageFile.type
        }
      }
    ]);

    const responseText = result.response.text();
    
    // Parse the response text to extract all the information
    const parsedData = parseFullFoodInfo(responseText);
    
    return parsedData;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}

function parseFullFoodInfo(text) {
  // This is a simple parser, you may need to implement a more robust solution
  const lines = text.split('\n');
  const data = {
    name: '',
    calories: '',
    protein: '',
    carbohydrates: '',
    fat: '',
    benefits: [],
    limitations: [],
    suitableFor: []
  };

  let currentSection = '';

  lines.forEach(line => {
    if (line.toLowerCase().includes('food:')) {
      data.name = line.split(':')[1].trim();
    } else if (line.toLowerCase().includes('calories:')) {
      data.calories = line.split(':')[1].trim();
    } else if (line.toLowerCase().includes('protein:')) {
      data.protein = line.split(':')[1].trim();
    } else if (line.toLowerCase().includes('carbohydrates:')) {
      data.carbohydrates = line.split(':')[1].trim();
    } else if (line.toLowerCase().includes('fat:')) {
      data.fat = line.split(':')[1].trim();
    } else if (line.toLowerCase().includes('benefits:')) {
      currentSection = 'benefits';
    } else if (line.toLowerCase().includes('limitations:')) {
      currentSection = 'limitations';
    } else if (line.toLowerCase().includes('suitable for:')) {
      currentSection = 'suitableFor';
    } else if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
      const item = line.trim().substring(1).trim();
      if (currentSection && item) {
        data[currentSection].push(item);
      }
    }
  });

  return data;
}
