import React, { useContext } from 'react';
import VehicleDetails from './VehicleDetails';
import { AppContext } from '../contexts/AppContext';
import { Table } from 'react-bootstrap';

const VehicleList = () => {
  const { vehicles } = useContext(AppContext);
  return vehicles.length ? (
    <div className='vehicles-list card shadow'>
      <div className="vehicles-table shadow-sm">
        <Table striped bordered className='mb-0'>
          <thead>
          </thead>
          <tbody>
            <tr>
              <th>Vehicles Completed</th>
              <td>{vehicles.length}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <ul>
        {vehicles.slice(0).reverse().map(vehicle => {
          return (<VehicleDetails vehicle={vehicle} key={vehicle.id} />);
        })}
      </ul>
    </div>
  ) : (
    <>
      <div className="no-vehicles">
        <p>NO VEHICLES</p>
      </div>
    </>
  );
}

export default VehicleList;