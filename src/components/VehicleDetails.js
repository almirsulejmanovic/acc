import React, { useContext } from 'react';
import { VehicleContext } from '../contexts/VehicleContext';
import moment from 'moment';
import { Button, Table } from 'react-bootstrap';


const VehicleDetails = ({ vehicle }) => {
  const { dispatch } = useContext(VehicleContext);

  return (
    <div className="services-table">
      <Table size="sm" striped bordered>
        <thead>
        </thead>
        <tbody>
          <tr>
            <th>Service</th>
            <td>{vehicle.service}</td>
          </tr>

          <tr>
            <th>Time Started</th>
            <td>{moment(vehicle.timeStarted).format('h:mm:ss A')}</td>
          </tr>
            
          <tr>
            <th>Time Finished</th>
            <td>{moment(vehicle.timeFinished).format('h:mm:ss A')}</td>
          </tr>

          <tr>
            <th>Total Time</th>
            <td>{vehicle.totalTime}</td>
          </tr>

          <tr>
            <th>Actions</th>
            <td><Button variant="danger" size="sm" onClick={() => dispatch({ type: 'REMOVE_VEHICLE', id: vehicle.id })}>Delete</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default VehicleDetails;