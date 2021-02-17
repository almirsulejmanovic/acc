import React from 'react';
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home-container">
            <ButtonGroup vertical>
                <Link to="/oilchange"><Button className="home-buttons">New Oil Change</Button></Link>
                <Link to="/vehiclelist"><Button className="home-buttons">Vehicle List</Button></Link>
            </ButtonGroup>

        </div>
    )
}
export default Home;