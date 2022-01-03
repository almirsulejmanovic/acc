import React from 'react'
import { Modal } from 'react-bootstrap'
import VIN from './VIN'

export default function VINModal(props) {

  return (
    <div>
      <Modal {...props} className='mt-5'>
        <Modal.Header>
          <Modal.Title>
            VIN Decoder
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <VIN />
        </Modal.Body>
      </Modal>
    </div>
  )
}
