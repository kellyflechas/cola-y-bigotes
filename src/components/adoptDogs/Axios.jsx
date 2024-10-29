// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': 'live_OeUSdaFDwCtcdKDmkshYcPEH3xFeMb5EeophYrWQUeeabF4weZ7pREuqEG3fB3Yr'
  }
});

export default instance;
