import React, { useContext } from 'react';
import VehicleDetails from './VehicleDetails';
import { VehicleContext } from '../contexts/VehicleContext';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

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
    <div>
      <div  className="empty">
        <p>No vehicles</p>
      </div>
        
      <div className="empty-button">
        <Link to="/acc-gh-pages"><Button className="home-buttons">Go Home</Button></Link>
      </div>
    </div>
  );
}

export default VehicleList;