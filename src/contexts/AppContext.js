import React, { createContext, useReducer, useEffect, useState, useRef } from 'react';
import { vehicleReducer } from '../reducers/vehicleReducer';
import { Table } from 'react-bootstrap';
import moment from 'moment';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [timeStarted, setTimeStarted] = useState()
  const [filterUPC, setFilterUPC] = useState('')
  const [year, setYear] = useState()
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const engineSize = useRef()
  const mileage = useRef()
  const frontPSI = useRef()
  const rearPSI = useRef()

  const [vehicles, dispatchVehicle] = useReducer(vehicleReducer, [], () => {
    const localData = localStorage.getItem('vehicles');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  const info = () => {
    var currentTime = new Date()
    return (
      <>
        <Table bordered className='shadow-sm'>
          <thead>
          </thead>
          <tbody>
            <tr>
              <th className='w-50'>Time Started</th>
              <td className='w-50'>{moment(timeStarted).format('h:mm A')}</td>
            </tr>

            <tr>
              <th className='w-50'>Time Elapsed</th>
              <td className='w-50'>{moment.utc(moment(currentTime).diff(moment(timeStarted))).format('HH:mm')}</td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }

  const values = {
    vehicles,
    dispatchVehicle,
    timeStarted,
    setTimeStarted,
    info,
    filterUPC,
    setFilterUPC,
    year,
    setYear,
    make,
    setMake,
    model,
    setModel,
    engineSize,
    mileage,
    frontPSI,
    rearPSI
  }

  return (
    <AppContext.Provider value={values}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;