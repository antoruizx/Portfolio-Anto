import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark font-bold text-center text-white ' style={{ backgroundColor: 'black' }}>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        © 2023 Copyright | Nadia Antonella Ruiz
        <a className='text-white'>
        
        </a>
      </div>
    </MDBFooter>
  );
}