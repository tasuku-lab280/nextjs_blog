import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'p3h5e6sfhx',
  apiKey: process.env.MICRO_CMS_API_KEY,
});
