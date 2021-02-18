import React, { useContext, useEffect, useState } from 'react';
import { VehicleContext } from '../contexts/VehicleContext';
import { useHistory  } from 'react-router-dom';
import moment from 'moment';
import { Form, Col, Button } from 'react-bootstrap';

const Tires = () => {
    let history = useHistory();
    const { dispatch } = useContext(VehicleContext);
    const [service] = useState('Tires');
    const [timeStarted, setTimeStarted] = useState(Date());

    useEffect(() => {
        setTimeStarted(Date());
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        var timeFinished = Date();
        var totalTime = moment.utc(moment(timeFinished).diff(moment(timeStarted))).format("HH:mm:ss");
        dispatch({ type: 'ADD_VEHICLE', vehicle: { service, timeStarted, timeFinished, totalTime } });
        history.push('/');
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
                        <Form.Control size="sm" type="number" placeholder="Tire Size" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" as="textarea" placeholder="DOT" style={{textTransform: 'uppercase'}} rows={4} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control size="sm" as="textarea" placeholder="Comments" style={{textTransform: 'uppercase'}} rows={8} />
                    </Form.Group>
                </Form.Row>

                <Button size="sm" variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Tires;