/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewHostForm from './newHostForm';

 
function NewHost () {
    const [showModal, setShowModal] = useState(false);
    
    // const closeMenu = () => {
    //     setShowMenu(false);
    //   };
      
    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };

  //   return (
  //       <div>
  //     <div>
  //     </div>
  //     <div>
       
  //         <button
  //           onClick={() => setShowMenu(true)}>
  //           Sign Up
  //         </button>
        
  //       {showMenu && (
  //         <Modal onClose={() => setShowMenu(false)}>
  //           <NewHostForm />
  //         </Modal>
  //       )}
  //     </div>
  //   </div>
  // );
  
  return(
    <>
    <div>
        <button onClick={() => setShowModal(true)}>Write a new story</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <NewHostForm  setShowModal={setShowModal}/>
                </Modal>
            )}
    </div>
</>
)
}

export default NewHost