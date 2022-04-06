import './Favorites.css'

const Modal_styles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    // width:'40%',
    transform: "translate(-50% , -50%)",
    backgroundColor: "#FFF",
    padding: "50px 200px 50px 50px",
    zIndex: 1000,
    borderRadius: "20px",
  };


function Favorites(){

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
 
  let favor = JSON.parse(localStorage.getItem("fav"));
 const arr= item.filter((n)=>favor.includes(n.id))
 console.log(arr);
console.log(favor);
    <>

    {arr.map((n) => {
    //   console.log(n);
      
      return (
        <>
       
          <div style={Modal_styles}>
            <div className="group" id={n.id}>
              <img src="images/food2.jpeg" alt="img" />
              <div className="description">
                <div className="name">{n.name}</div>
                <div className="gram">{n.weight}</div>
              </div>
              <div className="ment" >
                <span className="minus">-</span>
                <span className="num">1</span>
                <span className="plus">+</span>
              </div>
              <div className="decimal">{n.price}</div>
              <span className="material-icons close">close</span>
            </div>
            
            {/* <button onClick={props.onClose}>Close Modal</button> */}
           
          </div>
        </>
      );
    })
    
    }
  </>
}

export default Favorites;