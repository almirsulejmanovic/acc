import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MdHome, MdInfo, MdMenu } from 'react-icons/md';
import ServicesModal from './ServicesModal';
import InfoModal from './InfoModal';


export default function NavigationBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showServicesModal, setShowServicesModal] = useState(false)
  const [fullscreen] = useState(true);
  const [showInfoModal, setShowInfoModal] = useState(false)

  const goHome = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <div className='navbar d-flex'>
        <div className='justify-content-between ms-3'>
          <button
            className='nav-btn'
            onClick={() => setShowServicesModal(true)}>
            <MdMenu size='25px' />
          </button>
          <span className='acc-text'>Auto Care Center</span>
        </div>


        <div className='justify-content-between me-3'>
          <button
            className='nav-btn ms-2'
            onClick={() => setShowInfoModal(true)}
            disabled={
              location.pathname !== '/oilchange' &&
              location.pathname !== '/battery' &&
              location.pathname !== '/tires' &&
              location.pathname !== '/misc'
            }>
            <MdInfo size='25px' />
          </button>
          <button
            className='nav-btn'
            onClick={goHome}
            disabled={location.pathname === '/'}>
            <MdHome size='25px' />
          </button>
        </div>
      </div>

      <ServicesModal
        onClick={() => setShowServicesModal(false)}
        onHide={() => setShowServicesModal(false)}
        show={showServicesModal}
        fullscreen={fullscreen}
      />

      <InfoModal
        show={showInfoModal}
        onHide={() => setShowInfoModal(false)}
      />
    </>
  )
}