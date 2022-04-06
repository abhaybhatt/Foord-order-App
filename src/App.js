import "./App.css";
import React, { useEffect } from "react";
import Products from "./Components/Products";
import Order from "./Components/Orders";
import { useState} from "react";
// import { render } from "@testing-library/react";
import Modal from "./Components/Modal";
// import images from '././'
function App() {
  // const [fav, setFav] = React.useState([]);
  // const [modalValue, setmodalValue] = useState(true);

  const item = [
    {
      id: 1,
      name: "Pasta",
      weight: "300g",
      price: 450,
      image: "images/food1.jpg",
    },
    {
      id: 2,
      name: "Fruit Salad",
      weight: "200g",
      price: 120,
      image: "images/food10.jpg",
    },
    {
      id: 3,
      name: "Backon Flavored Crackers",
      weight: "250g",
      price: 250,
      image: "images/food3.jpg",
    },
    {
      id: 4,
      name: "Roasted Cauliflower grain",
      weight: "150g",
      price: 350,
      image: "images/food7.jpg",
    },
    {
      id: 5,
      name: "Sea Food",
      weight: "300g",
      price: 150,
      image: "images/food5.jpg",
    },
    {
      id: 6,
      name: "Smoothie Bowl",
      weight: "200g",
      price: 400,
      image: "images/food9.jpg",
    },
  ];
  const [filter, setFilter] = useState([...item]);
  const [fav, setFav] = React.useState([]);
  const [sort, setSort] = useState(1);
  const [open, setOpen] = useState(false);


  let arr = [];

// ===========================FILTER BY==========================//
  const handleSelectChange = (e) => {
    setFilter([]);
    let i;
    if (e.target.value === "one") {
      i = item.filter((n) => n.price <= 200);
    } else if (e.target.value === "two") {
      console.log("hi");
      i = item.filter((n) => n.price > 200 && n.price <= 300);
    } else if (e.target.value === "three") {
      i = item.filter((n) => n.price > 300 && n.price <= 500);
    }else{
      i=item;
    }
    if (i.length > 1) {
      arr.push(i);
      setFilter(...arr, i);
    } else setFilter(i);

  };

// ===========================SORTED BY==========================//
 function sorting(e){
    console.log(filter);
    if(e.target.value==="low")
   filter.sort((a, b) => (a.price) - (b.price));
   else if(e.target.value==="high")
   filter.sort((a, b) => (b.price) - (a.price));
   else setFilter(item);
if(sort===1) setSort(0)
else setSort(1)
  }

function changeValue(data){
  setOpen(data);
  // console.log(data);
  console.log(open);
  return data;
}

  return (
    <div>
    <div className="App">
      <div className="left">
        <div className="menu">
          <span className="material-icons menus ">list</span>
          MENU
        </div>
      </div>
      <div className="middle">
        {/* <button className="filter">
          <span className="material-icons">filter_list</span> Filter
          </button> */}
        <select className="filter" onChange={handleSelectChange}>
          <option value="fill">filter by Price</option>
          <option value="one">100-200</option>
          <option value="two">200-300</option>
          <option value="three">300-500</option>
        </select>
        <div className="sort">
          Sorted by
          <span className="recommend">   <select className="recom"  onChange={sorting}>
          <option value="recommended">Recommented</option>
          <option value="low">low to high</option>
          <option value="high">high to low</option>
        </select></span>
        </div>
        <div className="arrange">
          {
            
          filter.map((n) => {
            return (
              <Products
                fav={fav}
                setFav={setFav}
                id={n.id}
                name={n.name}
                weight={n.weight}
                price={n.price}
                image={n.image}
              ></Products>
            );
          })}
        </div>
      </div>

      <div className="right">
          <Order func={changeValue}  />
        </div>
    </div>
<Modal open={open} item={item} onClose={()=>setOpen(false)}>Fancy Modal</Modal>
</div>
  );
}

export default App;
