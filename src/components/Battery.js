import React, { useRef, useEffect, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VehicleInfo from './VehicleInfo'


export default function Battery() {
  const navigate = useNavigate()
  const { dispatchVehicle, year, setYear, make, setMake, model, setModel } = useContext(AppContext)
  const upc = useRef()
  const serial = useRef()
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
    const service = 'Battery'
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
              placeholder='UPC'
              size='sm'
              ref={upc}
              onChange={e => {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
                e.target.value = x[1] ? x[1] + (x[2] ? '-' + x[2] : '') + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '') : '';
                if (e.target.value.length === 15) {
                  upc.current.blur()
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
              placeholder='Serial #'
              size='sm'
              ref={serial}
              onChange={e => {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,3})/);
                e.target.value = x[1] ? 'JCH ' + x[1] + (x[2] ? ' ' + x[2] : '') + (x[3] ? ' ' + x[3] : '') : '';
                if (e.target.value.length === 17) {
                  serial.current.blur()
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
