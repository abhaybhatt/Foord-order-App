import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import './Modal.css'
// import './Favorites'
import Favorites from "./Favorites";

export default function Modal({ open, children, onClose,item }) {
//  console.log(open);
// console.log(item);
const [list ,setList]=useState([]);

console.log("hi");
// console.log(list);
  // if (!open) return null;
  return ReactDOM.createPortal(
    <>
    <div className="overlay" />
    <div className="modal">
      <button onClick={onClose} >Close Modal</button>
      {/* {children} */}
  <Favorites  />

    </div>
    </>,document.getElementById('portal')
  );
}
