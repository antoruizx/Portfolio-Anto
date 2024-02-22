import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import SocialLinks2 from './SocialLinks2';


export default function Footer() {
  return (
    <MDBFooter className='bg-dark font-bold text-center text-white ' style={{ backgroundColor: 'black' }}>

      <div className='text-center p-4' style={{ backgroundColor: 'black' }}>
        © 2024 Copyright | Portfolio de Nadia Antonella Ruiz
        <SocialLinks2 />
      </div>

    </MDBFooter>
  );
}