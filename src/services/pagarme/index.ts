import axios from 'axios';

export const apiPagarme = axios.create({
  baseURL: 'https://api.pagar.me',
});
