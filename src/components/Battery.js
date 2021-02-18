import React, { useContext, useEffect, useState } from 'react';
import { VehicleContext } from '../contexts/VehicleContext';
import { useHistory  } from 'react-router-dom';
import moment from 'moment';
import { Form, Col, Button } from 'react-bootstrap';

const Battery = () => {
    let history = useHistory();
    const { dispatch } = useContext(VehicleContext);
    const [service] = useState('Battery');
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
                        <Form.Control type="number" placeholder="Mileage" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control type="number" placeholder="Front PSI" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="number" placeholder="Rear PSI" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control as="select">
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
                        <Form.Control type="number" placeholder="Engine Size" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control type="number" placeholder="UPC" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="Serial Number" style={{textTransform: 'uppercase'}}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control as="textarea" placeholder="Comments" style={{textTransform: 'uppercase'}} rows={10} />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Battery;