import React, { useState } from 'react';
import axios from 'axios';
import { Form, Col, InputGroup, FormControl, Button, Table } from 'react-bootstrap';

// 2C3CCAET4CH256062

const VINDecoder = () => {
    const [VIN, setVIN] = useState('');
    const [data, setData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const VIN_input = () => {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <FormControl placeholder="VIN Number" value={VIN} style={{textTransform: 'uppercase'}} 
                                onChange={(e) => setVIN(e.target.value)} required/>
                            <InputGroup.Append>
                                <Button onClick={handleVINSubmit}>Submit</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
            </Form>
        )
    }

    const VIN_table = () => {
        return (
            <Table size="sm" bordered striped>
                <thead>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'center' }}>{data.SearchCriteria}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Year</th>
                        <td>{data.Results[9].Value}</td>
                    </tr>
                    <tr>
                        <th>Make</th>
                        <td>{data.Results[6].Value}</td>
                    </tr>
                    <tr>
                        <th>Model</th>
                        <td>{data.Results[8].Value}</td>
                    </tr>
                    <tr>
                        <th>Engine Size</th>
                        <td>{data.Results[73].Value}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }

	const getData = async () => {
        try {
            const response = await axios.get(`https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVin/${VIN}?format=json`);
            setData(response.data)
            setIsSubmitted(true);
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleVINSubmit = (e) => {
        e.preventDefault();
        getData();
        setVIN('');
        console.log(VIN)
    }

    return (
        <div className="service-container">
            {VIN_input()}
            {isSubmitted && VIN_table()}
        </div>
    )
}

export default VINDecoder;