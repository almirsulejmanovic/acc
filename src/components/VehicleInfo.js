import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import vehicles from '../assets/json/vehicles.json'

export default function VehicleInfo() {
  const { year, setYear, make, setMake, model, setModel, engineSize, mileage, frontPSI, rearPSI } = useContext(AppContext)
  const years = [...new Set(vehicles.map(item => item.year))]
  const filteredmakes = vehicles.filter(vehicle => vehicle.year === Number(year))
  const sortedmakes = [...new Set(filteredmakes.map(item => item.make))].sort()
  const filteredmodels = vehicles.filter(vehicle => vehicle.year === Number(year) && vehicle.make === make)
  const sortedmodels = [...new Set(filteredmodels.map(item => item.model))].sort()

  return (
    <div>
      <Row className='mb-3 g-3'>
        <Col>
          <Form.Select size='sm' onChange={e => setYear(e.target.value)}>
            <option>Year</option>
            {years.map((item) => <option key={item} value={item}>{item}</option>)}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select size='sm' disabled={year === undefined} onChange={e => setMake(e.target.value)}>
            <option>Make</option>
            {sortedmakes.map((item) => <option key={item} value={item}>{item}</option>)}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select size='sm' disabled={make === ''} onChange={e => { setModel(e.target.value); setTimeout(() => engineSize.current.focus(), 0) }}>
            <option>Model</option>
            {sortedmodels.map((item) => <option key={item} value={item}>{item}</option>)}
          </Form.Select>
        </Col>
        <Col>
          <Form.Control
            type='text'
            inputMode='numeric'
            placeholder='Engine Size'
            size='sm'
            ref={engineSize}
            disabled={model === ''}
            onChange={e => {
              const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,1})/);
              e.target.value = x[1] ? x[1] + (x[2] ? '.' + x[2] : '') : '';
              if (e.target.value.length === 3) {
                engineSize.current.blur()
              }
            }}
          />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
          <Form.Control
            type='text'
            inputMode='numeric'
            placeholder='Mileage'
            size='sm'
            ref={mileage}
            onChange={e => { if (e.target.value.length === 6) { mileage.current.blur() } }}
            onBlur={e => {
              const x = e.target.value.replace(/^0+/, '')
              e.target.value = x
              mileage.current.blur()
            }}
          />
        </Col>
      </Row>
      <Row className='mb-3 g-3'>
        <Col>
          <Form.Control
            type='text'
            inputMode='numeric'
            placeholder='Front PSI'
            size='sm'
            ref={frontPSI}
            onChange={e => { if (e.target.value.length === 2) { rearPSI.current.focus() } }}
          />
        </Col>
        <Col>
          <Form.Control
            type='text'
            inputMode='numeric'
            placeholder='Rear PSI'
            size='sm'
            ref={rearPSI}
            onChange={e => { if (e.target.value.length === 2) { rearPSI.current.blur() } }}
          />
        </Col>
      </Row>
    </div>
  )
}
