import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewHostForm from './newHostForm';

 
function NewHost () {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>
            Host a location
            </button>
            {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <NewHostForm />
            </Modal>
          )}
        </div>
    )
}

export default NewHost