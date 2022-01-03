import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaOilCan, FaCarBattery, FaList } from 'react-icons/fa';
import { GiFlatTire } from 'react-icons/gi'
import { BiCircle } from 'react-icons/bi'



export default function Home() {
  return (
    <div className='home'>
      <ButtonGroup vertical>
        <Link to="/oilchange"><button className='home-btn m-2'><i className='home-btn-icon'><FaOilCan /></i>Oil Change</button></Link>
        <Link to="/battery"><button className='home-btn m-2'><i className='home-btn-icon'><FaCarBattery /></i>Battery</button></Link>
        <Link to="/tires"><button className='home-btn m-2'><i className='home-btn-icon'><GiFlatTire /></i>Tires</button></Link>
        <Link to="/misc"><button className='home-btn m-2'><i className='home-btn-icon'><BiCircle /></i>Misc</button></Link>
        <Link to="/vehiclelist"><button className='home-btn m-2'><i className='home-btn-icon'><FaList /></i>Vehicle List</button></Link>
      </ButtonGroup>
    </div>
  )
}