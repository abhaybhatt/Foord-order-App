import "./Products.css";
import React from "react";
import { useState, useEffect } from "react";
// import Item from "./Item";

function Products(props) {

  const favorites=()=>{
    if(props.fav.indexOf(props.id)===-1){
      let arr=[...props.fav,props.id];
      // console.log(arr);
      props.setFav(arr);
      localStorage.setItem("fav",JSON.stringify(arr));
    }
else{
 (props.fav).splice(((props.fav).indexOf(props.id)),1)
  props.setFav(props.fav)
  localStorage.setItem("fav",JSON.stringify(props.fav));

}

  }

  return (
    <div className="products" id={props.id}>
      <img src={props.image} alt="img" className="img" />
      <div className="rate">
        <span className="material-icons star">star</span>
        4.2
      </div>
      <div className="mark">
        <span className="material-icons heart" onClick={favorites}>favorite_border</span>
      </div>
      <div className="text">
        {props.name}
        <span className="weight">{props.weight}</span>
      </div>
      <div className="price">₹{props.price}</div>
    </div>
  );
}

export default Products;
