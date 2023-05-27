import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function DeletePage() {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Make API call to delete the data from MongoDB
      await axios.delete('/api/deleteData');
      navigate('/');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="delete-page">
      <MDBContainer fluid className="d-flex flex-column align-items-center justify-content-center">
        <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Are you sure you want to delete?</p>
                <form className="d-flex flex-column align-items-center">
                  <MDBBtn className="btn btn-primary my-2" onClick={handleDelete}>
                    Delete
                  </MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default DeletePage;
