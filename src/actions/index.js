export const FETCH_CARS = 'FETCH_CARS'
export const CAR_CREATED = 'CAR_CREATED'
export const FETCH_CAR = 'FETCH_CAR'
export const REMOVE_CAR = 'REMOVE_CAR'

const BASE_URL = 'https://wagon-garage-api.herokuapp.com/'

export function fetchCars(garage) {
  const promise = fetch(BASE_URL + garage + "/cars")
    .then(response => response.json())

  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function createCar(garage, body, callback) {
  const request = fetch(BASE_URL + garage + '/cars', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }).then(response => response.json()).then(callback)

  return {
    type: CAR_CREATED,
    payload: request
  }
}

export function removeCar(car, callback) {
  fetch(BASE_URL + "cars/" + car.id, { method: 'DELETE' })
    .then(r => r.json())
    .then(callback);

  return {
    type: REMOVE_CAR,
    payload: car
  };
}

export function fetchCar(id) {
  const promise = fetch(BASE_URL + "cars/" + id)
    .then(response => response.json())

  return {
    type: FETCH_CAR,
    payload: promise
  }
}
