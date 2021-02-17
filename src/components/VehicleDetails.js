import React, { useContext } from 'react';
import { VehicleContext } from '../contexts/VehicleContext';
import moment from 'moment';
import { Button } from 'react-bootstrap';

const VehicleDetails = ({ vehicle }) => {
  const { dispatch } = useContext(VehicleContext);
  return (
      <div className="services-table">
        <table className="layout display responsive-table">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Time Started</th>
              <th scope="col">Time Finished</th>
              <th scope="col">Total Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Service">{vehicle.service}</td>
              <td data-label="Time Started">{moment(vehicle.timeStarted).format('h:mm:ss A')}</td>
              <td data-label="Time Finished">{moment(vehicle.timeFinished).format('h:mm:ss A')}</td>
              <td data-label="Total Time">{vehicle.totalTime}</td>
              <td data-label="Actions"><Button variant="danger" size="sm" onClick={() => dispatch({ type: 'REMOVE_VEHICLE', id: vehicle.id })}>Delete</Button></td>
            </tr>
          </tbody>
        </table>

      </div>
  );
}

export default VehicleDetails;