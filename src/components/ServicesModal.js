import React, { useState, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { FaOilCan, FaCar, FaCarBattery, FaList } from 'react-icons/fa';
import { GiFlatTire } from 'react-icons/gi'
import { BiCircle } from 'react-icons/bi'
import VINModal from './VINModal';
import FilterModal from './FilterModal';
import OilFilter from '../assets/img/OilFilter.png'

export default function ServicesModal(props) {
  const [showVINModal, setShowVINModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const { setFilterUPC } = useContext(AppContext)

  return (
    <>
      <Modal {...props} >
        <Modal.Header closeButton>
          <Modal.Title>Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='services-list'>
            <Link to='/oilchange'>
              <div className='services'>
                <div className='services-icon'>
                  <FaOilCan size='25px' />
                </div>
                Oil Change
              </div>
            </Link>
            <Link to='/battery'>
              <div className='services'>
                <div className='services-icon'>
                  <FaCarBattery size='25px' />
                </div>
                Battery
              </div>
            </Link>
            <Link to='/tires'>
              <div className='services'>
                <div className='services-icon'>
                  <GiFlatTire size='25px' />
                </div>
                Tires
              </div>
            </Link>
            <Link to='/misc'>
              <div className='services'>
                <div className='services-icon'>
                  <BiCircle size='25px' />
                </div>
                Misc.
              </div>
            </Link>
            <hr></hr>
            <div className='services' onClick={() => setShowFilterModal(true)}>
              <div className='services-icon'>
                <img src={OilFilter} style={{ width: '25px', height: '25px' }} alt='' />
              </div>
              Oil Filters
            </div>
            <hr></hr>
            <Link to='/vehiclelist'>
              <div className='services'>
                <div className='services-icon'>
                  <FaList size='25px' />
                </div>
                Vehicle List
              </div>
            </Link>
            <hr></hr>
            <div className='services' onClick={() => setShowVINModal(true)}>
              <div className='services-icon'>
                <FaCar size='25px' />
              </div>
              VIN Decoder
            </div>
          </ul>
        </Modal.Body>
      </Modal>
      <VINModal show={showVINModal} onHide={() => setShowVINModal(false)} />
      <FilterModal show={showFilterModal} onHide={() => { setShowFilterModal(false); setFilterUPC('') }} />
    </>
  )
}
