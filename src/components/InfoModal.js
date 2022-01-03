import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { AppContext } from '../contexts/AppContext'

export default function InfoModal(props) {
  const { info } = useContext(AppContext)
  return (
    <div>
      <Modal {...props} className='mt-5'>
        <Modal.Body>{info()}</Modal.Body>
      </Modal>
    </div>
  )
}
