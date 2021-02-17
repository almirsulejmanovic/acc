import React, { useContext } from 'react';
import VehicleDetails from './VehicleDetails';
import { VehicleContext } from '../contexts/VehicleContext';

const VehicleList = () => {
  const { vehicles } = useContext(VehicleContext);
  return vehicles.length ? (
    <div>
      <ul>
        {vehicles.map(vehicle => {
          return ( <VehicleDetails vehicle={vehicle} key={vehicle.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No vehicles</div>
  );
}

export default VehicleList;