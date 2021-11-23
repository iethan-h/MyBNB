import {NavLink} from 'react-router-dom'
import { useEffect, useState} from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import EditLocation from '../editLocation/locationEditForm'

const UpdateLocation = () =>{
    const [showModal, setShowModal] = useState(false);

    const {locationId} = useParams()

    const locationOne = useSelector(state => state?.location)
    const location = locationOne[locationId]
    return(
        <>
        <button onClick={() => setShowModal(true)}>Edit Location</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditLocation location={location} setShowModal={setShowModal}/>
                </Modal>
            )}
    </>
    )
}

export default UpdateLocation