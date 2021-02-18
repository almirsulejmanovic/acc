import React, { useContext, useEffect, useState } from 'react';
import { VehicleContext } from '../contexts/VehicleContext';
import { useHistory  } from 'react-router-dom';
import moment from 'moment';
import { Form, Col, Button, Modal } from 'react-bootstrap';
import VINDecoder from './VINDecoder'

const OilChange = () => {
    let history = useHistory();
    const { dispatch } = useContext(VehicleContext);
    const [service] = useState('Oil Change');
    const [timeStarted, setTimeStarted] = useState(Date());

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
  

    useEffect(() => {
        setTimeStarted(Date());
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        var timeFinished = Date();
        var totalTime = moment.utc(moment(timeFinished).diff(moment(timeStarted))).format("HH:mm:ss");
        dispatch({ type: 'ADD_VEHICLE', vehicle: { service, timeStarted, timeFinished, totalTime } });
        history.push('/acc-gh-pages');
    }

    return (
        <div className="service-container">
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" type="number" placeholder="Mileage" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" type="number" placeholder="Front PSI" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" type="number" placeholder="Rear PSI" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" as="select">
                            <option>Pre-service</option>
                            <option>NO OIL</option>
                            <option>1 QT LOW</option>
                            <option>1/2 QT LOW</option>
                            <option>FULL</option>
                            <option>OVER</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" as="select">
                            <option>Year</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                            <option>1992</option>
                            <option>1991</option>
                            <option>1990</option>
                            <option>1989</option>
                            <option>1988</option>
                            <option>1987</option>
                            <option>1986</option>
                            <option>1985</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" type="number" placeholder="Engine Size" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" as="select">
                            <option>Oil Viscosity</option>
                            <option>0W-20</option>
                            <option>5W-20</option>
                            <option>5W-30</option>
                            <option>10W-30</option>
                            <option>15W-40</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" type="number" placeholder="Oil Capacity" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" as="textarea" placeholder="Comments" style={{textTransform: 'uppercase'}} rows={8} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Button size="sm" variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button> {' '}
                        <Button size="sm" variant="secondary" onClick={handleShowModal}>
                            VIN Decoder
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        VIN Decoder
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <VINDecoder />
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default OilChange;