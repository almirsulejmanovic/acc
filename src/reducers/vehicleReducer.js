import { v4 as uuidv4 } from 'uuid';

export const vehicleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VEHICLE':
      return [...state, {
        id: uuidv4(),
        service: action.vehicle.service,
        year: action.vehicle.year,
        make: action.vehicle.make,
        model: action.vehicle.model,
        timeStarted: action.vehicle.timeStarted,
        timeFinished: action.vehicle.timeFinished,
        totalTime: action.vehicle.totalTime
      }]
    case 'DELETE_VEHICLE':
      return state.filter(vehicle => vehicle.id !== action.id);
    default:
      return state;
  }
}