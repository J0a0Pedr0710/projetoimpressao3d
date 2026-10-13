/* eslint-disable */
import { env } from '@/constants/env';

export const errorMessage = (error: any, isBlob?: boolean, hasTraceId?: boolean) => {
  if (isBlob) {
    const json = JSON.parse(error);
    if (env.APP_ENV === 'dev') console.error(json.description);
    return json.description;
  }
  if (error.response && error.response.data && error.response.data.description) {
    if (env.APP_ENV === 'dev') console.error(error.response.data.description);
    return error.response.data.description;
  }
  if (error.response && error.response.data && error.response.data.message) {
    const shouldShowTraceId = hasTraceId && error.response.data.traceId;
    if (env.APP_ENV === 'dev') console.error(error.response.data.message);
    if (shouldShowTraceId) {
      return { message: error.response.data.message, traceId: error.response.data.traceId };
    }
    return error.response.data.message;
  }
  const { data } = error;
  if (!data) {
    return null;
  }
  if (data.error) {
    if (env.APP_ENV === 'dev') console.error(data.error);
    return data.error;
  }
  if (env.APP_ENV === 'dev') console.error(data.message);
  return data.message;
};
