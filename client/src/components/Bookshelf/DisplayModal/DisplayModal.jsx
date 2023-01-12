import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from './Image.jsx';
import ModalFooter from './ModalFooter.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ setClickedBook, bookData }) => {
  return (
    <div>
      <Modal
        open={true}
        onClose={() => { setClickedBook() }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {bookData.title} <b/>
          </Typography>
          {bookData.description}
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
