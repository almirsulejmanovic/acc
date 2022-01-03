import React, { useRef, useEffect, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VehicleInfo from './VehicleInfo'



export default function OilChange() {
  const navigate = useNavigate()
  const { dispatchVehicle, year, setYear, make, setMake, model, setModel } = useContext(AppContext)
  const oilViscosity = useRef()
  const oilCapacity = useRef()
  const preService = useRef()
  const comments = useRef()
  const { timeStarted, setTimeStarted } = useContext(AppContext)



  useEffect(() => {
    setTimeStarted(new Date())
    setYear()
    setMake('')
    setModel('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const service = 'Oil Change'
    const timeFinished = new Date()
    const totalTime = moment.utc(moment(timeFinished).diff(moment(timeStarted))).format('HH:mm:ss')
    dispatchVehicle({ type: 'ADD_VEHICLE', vehicle: { service, year, make, model, timeStarted, timeFinished, totalTime } })
    navigate('/')
  }

  return (
    <div className='service card shadow'>
      <Form>
        <VehicleInfo />

        <Row className='mb-3 g-3'>
          <Col>
            <Form.Select
              size='sm'
              ref={oilViscosity}
              onChange={() => oilCapacity.current.focus()}
            >
              <option>Oil Viscosity</option>
              <option>0W-16</option>
              <option>0W-20</option>
              <option>0W-30</option>
              <option>0W-40</option>
              <option>5W-20</option>
              <option>5W-30</option>
              <option>5W-40</option>
              <option>10W-30</option>
              <option>15W-40</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              type='text'
              inputMode='numeric'
              placeholder='Oil Capacity'
              size='sm'
              ref={oilCapacity}
              onChange={e => {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,1})/);
                e.target.value = x[1] ? x[1] + (x[2] ? '.' + x[2] : '') : '';
                if (e.target.value.length === 3) {
                  oilCapacity.current.blur()
                }
              }}
            />
          </Col>
        </Row>
        <Row className='mb-3 g-3'>
          <Col>
            <Form.Select
              size='sm'
              ref={preService}
              onChange={() => preService.current.blur()}
            >
              <option>Pre-service</option>
              <option>NO OIL</option>
              <option>1 QT LOW</option>
              <option>1/2 QT LOW</option>
              <option>FULL</option>
              <option>OVER</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Form.Control
              type='text'
              as='textarea'
              placeholder='Comments'
              size='sm'
              style={{ textTransform: 'uppercase' }}
              rows={8}
              ref={comments}
            />
          </Col>
        </Row>
      </Form>
      <div className="d-flex">
        <div className='me-auto'>
          <button
            className='submit-btn'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
