import React, { useRef, useEffect, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VehicleInfo from './VehicleInfo'


export default function Misc() {
  const navigate = useNavigate()
  const { dispatchVehicle, year, setYear, make, setMake, model, setModel } = useContext(AppContext)
  const upc1 = useRef()
  const upc2 = useRef()
  const upc3 = useRef()
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
    const service = 'Misc'
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
              placeholder='UPC #1'
              size='sm'
              ref={upc1}
              onChange={e => {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
                e.target.value = x[1] ? x[1] + (x[2] ? '-' + x[2] : '') + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '') : '';
                if (e.target.value.length === 15) {
                  upc1.current.blur()
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
              placeholder='UPC #2'
              size='sm'
              ref={upc2}
              onChange={e => {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
                e.target.value = x[1] ? x[1] + (x[2] ? '-' + x[2] : '') + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '') : '';
                if (e.target.value.length === 15) {
                  upc2.current.blur()
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
              placeholder='UPC #3'
              size='sm'
              ref={upc3}
              onChange={e => {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
                e.target.value = x[1] ? x[1] + (x[2] ? '-' + x[2] : '') + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '') : '';
                if (e.target.value.length === 15) {
                  upc3.current.blur()
                }
              }}
            />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Form.Control
              type='text'
              placeholder='Serial #'
              size='sm'
              ref={serial}
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

