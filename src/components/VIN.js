import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Loader from "react-loader-spinner";


const VIN = () => {
  const [VIN, setVIN] = useState('');
  const [data, setData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false)


  const VIN_input = () => {
    return (
      <div>
        <Form className='d-flex mb-3' onSubmit={handleVINSubmit}>
          <Form.Control
            className='me-auto'
            size="sm"
            type="text"
            placeholder="VIN"
            style={{ textTransform: 'uppercase' }}
            value={VIN}
            onChange={e => setVIN(e.target.value)}
            required
          />
          <Button
            className='ms-1'
            size='sm'
            type='submit'
          >
            {isLoading ?
              <Loader
                type="TailSpin"
                color='white'
                height={14}
                width={14} /> :
              <FaSearch />
            }
          </Button>
        </Form>
      </div>
    )
  }

  const VIN_table = () => {
    return (
      <div className='vin-table-container'>
        <Table size="sm" bordered striped className='shadow-sm'>
          <thead>
            <tr>
              <th colSpan="2" style={{ textAlign: 'center', textTransform: 'uppercase' }}>{data.SearchCriteria.substring(4)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Year</th>
              <td>{data.Results[9].Value}</td>
            </tr>
            <tr>
              <th>Make</th>
              <td>{data.Results[6].Value}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{data.Results[8].Value}</td>
            </tr>
            <tr>
              <th>Engine Size</th>
              <td>{(Math.round(data.Results[71].Value * 10) / 10).toFixed(1)}</td>
            </tr>
            <tr>
              <th>Engine Model</th>
              <td>{data.Results[73].Value}</td>
            </tr>
          </tbody>
        </Table>
      </div>

    )
  }

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVin/${VIN}?format=json`);
      setData(response.data)
      setIsLoading(false)
      setIsSubmitted(true);
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleVINSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div>
      {VIN_input()}
      {isSubmitted && VIN_table()}
    </div>
  )
}

export default VIN;