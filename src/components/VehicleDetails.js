import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import moment from 'moment';
import { Table } from 'react-bootstrap';


const VehicleDetails = ({ vehicle }) => {
  const { dispatchVehicle } = useContext(AppContext);

  return (
    <div className="vehicles-table shadow-sm">
      <Table size="sm" striped bordered>
        <thead>
        </thead>
        <tbody>
          <tr>
            <th>Service</th>
            <td>{vehicle.service}</td>
          </tr>

          <tr>
            <th>Vehicle</th>
            <td>{vehicle.year}{' '}{vehicle.make}{' '}{vehicle.model}</td>
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
            <td>
              <span
                style={{ color: 'red', cursor: 'pointer', userSelect: 'none' }}
                onClick={() => dispatchVehicle({ type: 'DELETE_VEHICLE', id: vehicle.id })}
              >
                Delete
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default VehicleDetails;