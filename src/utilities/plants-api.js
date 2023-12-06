import sendRequest from './send-request';
const BASE_URL = '/api/plants';

export function createPlant(newPlant) {
    return sendRequest(BASE_URL, 'POST', newPlant);
  }