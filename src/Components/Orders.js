import React , { useState } from "react";
import DateTime from "./DateTime";
// import Item from "./Item";
import "./Orders.css";
function Order(props) {
const [openModal,setOpenModal]=useState(false);

const passingValue=()=>{

  props.func(openModal);
  setOpenModal(!openModal);

  // console.log(openModal)  
}

  return (
    <React.Fragment>
      <div className="head">
        <div className="order">My Order</div>
        <div className="fav" onClick={ passingValue}>Favorites</div>
      </div>
      <div className="time">
        <span className="material-icons clock">watch_later</span>
        <DateTime/>
      </div>
      <hr
        style={{
          color: "red",
          backgroundColor: "green",
          width: 350,
        }}
      />
      <div className="list">
        {/* <Item /> */}
      </div>
      <button className="drag">Drag&Drop</button>
   <div className="bottom">
       <div className="total">Total</div>
       <div className="amount">$15.49</div>
   </div>
   <button className="check">Checkout</button>
   
    </React.Fragment>
  );
}
export default Order;
