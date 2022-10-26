import Modal from '@mui/material/Modal';
import { useState } from 'react';
import './NewWheelModal.css';
import NewSpinWheel from '../SpinWheel/NewSpinWheel'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddNewWheelModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <>
        <button id="new-wheel-button" onClick={handleOpen}>Create a new wheel</button>
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-container">
                <div className="modal-title">
                    Add a new wheel
                </div>
                <div className="empty">
                    <input type="text" placeholder='WHEEL NAME... >w<'/>
                        </div>
                    < NewSpinWheel /> 
                        {/* <div className="empty"> <input type="text" /> </div> */}
                        {/* <div className="empty"> <input type="text" /> </div> */}
                <div className="add-button-container">
                    <button>Save your new wheel</button>
                </div>
            </div>
        </Modal>
        </>
    );
}
 
export default AddNewWheelModal;