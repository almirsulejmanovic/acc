import React, { createContext, useReducer, useEffect } from 'react';
import { vehicleReducer } from '../reducers/vehicleReducer';

export const VehicleContext = createContext();

const VehicleContextProvider = (props) => {
  const [vehicles, dispatch] = useReducer(vehicleReducer, [], () => {
    const localData = localStorage.getItem('vehicles');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);
  return (
    <VehicleContext.Provider value={{ vehicles, dispatch }}>
      {props.children}
    </VehicleContext.Provider>
  );
}
 
export default VehicleContextProvider;