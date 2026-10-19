import { countries } from '@/constants/countries';

const defaultUrlFlag = 'https://plublic-postaqui-images.s3.us-east-1.amazonaws.com/flags';
const CACHE_NAME = 'country-flags-cache';

async function getCache(): Promise<Cache> {
  return await caches.open(CACHE_NAME);
}

async function getCachedResponse(url: string): Promise<string | null> {
  const cache = await getCache();
  const response = await cache.match(url);
  if (response) {
    return response.url;
  }
  return null;
}

async function addToCache(url: string): Promise<void> {
  const cache = await getCache();
  const response = await fetch(url);
  await cache.put(url, response.clone());
}

export async function getCountryFlagUrl(countryCode: string): Promise<string> {
  const flag = countries.find(({ short }) => countryCode === short)?.flag;
  const flagUrl = `${defaultUrlFlag}/${flag}-flag.png`;

  const cachedUrl = await getCachedResponse(flagUrl);
  if (cachedUrl) {
    return cachedUrl;
  }

  await addToCache(flagUrl);
  return flagUrl;
}
