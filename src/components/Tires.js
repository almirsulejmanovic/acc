import React, { useRef, useEffect, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VehicleInfo from './VehicleInfo'


export default function Tires() {
  const navigate = useNavigate()
  const { dispatchVehicle, year, setYear, make, setMake, model, setModel } = useContext(AppContext)
  const size = useRef()
  const dot = useRef()
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
    const service = 'Tires'
    const timeFinished = new Date()
    const totalTime = moment.utc(moment(timeFinished).diff(moment(timeStarted))).format('HH:mm:ss')
    dispatchVehicle({ type: 'ADD_VEHICLE', vehicle: { service, year, make, model, timeStarted, timeFinished, totalTime } })
    navigate('/')
  }

  return (
    <div className='service card shadow'>
      <Form>
        <VehicleInfo />

        <Row className='mb-3'>
          <Col>
            <Form.Control
              type='text'
              inputMode='numeric'
              placeholder='Tire Size'
              size='sm'
              ref={size}
              onChange={e => {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = x[1] ? 'P' + x[1] + (x[2] ? '/' + x[2] : '') + (x[3] ? 'R' + x[3] : '') : '';
                if (e.target.value.length === 10) {
                  size.current.blur()
                }
              }}
            />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Form.Control
              type='text'
              as='textarea'
              placeholder='DOT'
              size='sm'
              style={{ textTransform: 'uppercase' }}
              rows={4}
              ref={dot}
            />
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