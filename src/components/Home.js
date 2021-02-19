import React from 'react';
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOilCan, faRing, faCarBattery, faCar, faList } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const oilIcon = <FontAwesomeIcon icon={faOilCan} />
    const tireIcon = <FontAwesomeIcon icon={faRing} />
    const batteryIcon = <FontAwesomeIcon icon={faCarBattery} />
    const vinIcon = <FontAwesomeIcon icon={faCar} />
    const listIcon = <FontAwesomeIcon icon={faList} />

    return (
        <div className="home-container">
            <ButtonGroup vertical>
                <Link to="/oilchange"><Button className="home-buttons"><span className="home-fa-icons">{oilIcon}</span>New Oil Change</Button></Link>
                <Link to="/tires"><Button className="home-buttons"><span className="home-fa-icons">{tireIcon}</span>New Tires</Button></Link>
                <Link to="/battery"><Button className="home-buttons"><span className="home-fa-icons">{batteryIcon}</span>New Battery</Button></Link>
                <Link to="/VINDecoder"><Button className="home-buttons"><span className="home-fa-icons">{vinIcon}</span>VIN Decoder</Button></Link>
                <Link to="/vehiclelist"><Button className="home-buttons"><span className="home-fa-icons">{listIcon}</span>Vehicle List</Button></Link>
            </ButtonGroup>
        </div>
    )
}
export default Home;