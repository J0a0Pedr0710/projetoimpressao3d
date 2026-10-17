import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

import { env } from '@/constants/env';

const config = (config: InternalAxiosRequestConfig, localStorageKey: string) => {
  const token = localStorage.getItem(localStorageKey);

  if (token) config.headers.Authorization = `Bearer ${JSON.parse(token)}`;

  return config;
};

const error = (error: Error) => Promise.reject(error);

export const apiInterfreight = axios.create({
  baseURL: env.API_INTERFREIGHT,
});

apiInterfreight.interceptors.request.use((c) => config(c, '@projeto.tokenUser'), error);
