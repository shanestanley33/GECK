import sendRequest from './send-request';

const BASE_URL = '/api/plants';

export function createPlant(newPlant) {
    return sendRequest(BASE_URL, 'POST', newPlant);
  }

export function getAllPlants(allPlants) {
    return sendRequest(BASE_URL, 'GET', allPlants);
}

export function getPlantDetail(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function updatePlant(editPlant, id) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', editPlant)
}

export function deletePlant(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}