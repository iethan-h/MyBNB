/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewHostForm from './newHostForm';

 
function NewHost () {
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    const closeMenu = () => {
        setShowMenu(false);
      };
      
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    return (
        <div>
      <div>
      </div>
      <div>
       
          <button
            onClick={() => setShowMenu(true)}>
            Sign Up
          </button>
        
        {showMenu && (
          <Modal onClose={() => setShowMenu(false)}>
            <NewHostForm />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default NewHost