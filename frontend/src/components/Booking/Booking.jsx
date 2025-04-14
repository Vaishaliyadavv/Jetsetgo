import React,{useState} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

const Booking = ({ tour , avgRating}) => {
  const { price, reviews } = tour;

  const [credentials, setCredentials] = useState({ 
    userId: '01', // later it will be dynamic 
    userEmail: 'example@gmail.com', 
    fullName: '', 
    phone: '', 
    guestSize: 1, 
    bookAt: '' 
  });

  
  
    const handleChange = e => {

    }
  return ( 
    <div className="booking"> 
      <div className="booking_top d-flex align-items-center justify-content-between"> 
        <h3> 
          ${price} <span>/per person</span> 
        </h3> 
        <span className="tour_rating d-flex align-items-center"> 
          <i class="ri-star-s-fill"></i> 
          {avgRating === 0 ? null : avgRating} ({reviews?.length}) 
        </span> 
      </div>

{/*================================================== booking starts ========================================*/} 
 
<div className="booking_form"> 
  <h5>Information</h5> 
  <Form className="booking_info-form"> 
    <FormGroup> 
      <input 
        type="text" 
        placeholder="Full Name" 
        id="fullName" 
        required 
        onChange={handleChange} 
      /> 
    </FormGroup> 

    <FormGroup> 
      <input 
        type="number" 
        placeholder="Phone" 
        id="phone" 
        required 
        onChange={handleChange} 
      /> 
    </FormGroup> 

    <FormGroup className="d-flex align-items-center gap-3"> 
      <input 
        type="date" 
        placeholder="" 
        id="bookAt" 
        required 
        onChange={handleChange} 
      /> 
      <input 
        type="number" 
        placeholder="Guest" 
        id="guestSize" 
        required 
        onChange={handleChange} 
      /> 
    </FormGroup> 
  </Form>
</div> 

{/*================================================== booking end ========================================*/} 

{/* ======================================booking bootom======================================== */}

        <div className="booking_bottom">
        <ListGroup>
            <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
                ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span> ${price}</span>
            </ListGroupItem>

            <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span> $10</span>
            </ListGroupItem>

            <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span> $109</span>
            </ListGroupItem>
        </ListGroup>

        <button className="btn primary__btn w-100 mt-4">Book Now</button>
        </div>
    </div> 
  );
};

export default Booking;
