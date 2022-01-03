import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Modal, Form } from 'react-bootstrap'

export default function FilterModal(props) {
  const { filterUPC, setFilterUPC } = useContext(AppContext)

  return (
    <div>
      <Modal {...props} className='mt-5'>
        <Modal.Header>
          <Modal.Title>
            Oil Filters
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Select className='mb-3' onChange={e => setFilterUPC(e.target.value)}>
            <option value=''>Select Filter</option>
            <option value="09100 55007">COR2ACC</option>
            <option value="09100 55015">COR5ACC</option>
            <option value="09100 55006">COR16ACC</option>
            <option value="09100 55008">COR3387AACC</option>
            <option value="09100 55009">COR3506ACC</option>
            <option value="09100 55010">COR3593AACC</option>
            <option value="09100 55011">COR3614ACC</option>
            <option value="09100 55012">COR3682ACC</option>
            <option value="09100 55013">COR3786ACC</option>
            <option value="09100 55014">COR4967ACC</option>
            <option value="09100 55016">COR6607ACC</option>
            <option value="09100 55004">COR9018ACC</option>
            <option value="09100 55017">COR9688ACC</option>
            <option value="09100 55591">COR9972ACC</option>
            <option value="09100 55005">COR10060ACC</option>
            <option value="09100 56020">COR10246ACC</option>
            <option value="09100 56154">COR10295ACC</option>
            <option value="09100 55884">COR10358ACC</option>
            <option value="09100 56021">COR10955ACC</option>
            <option value="09100 56022">COR11665ACC</option>
            <option value="09100 56168">COR12060ACC</option>
          </Form.Select>
          {filterUPC.length ?
            <div className='m-3 text-center'>
              <p>UPC:</p>
              <p>{filterUPC}</p>
            </div> :
            null}
        </Modal.Body>
      </Modal>
    </div>
  )
}
