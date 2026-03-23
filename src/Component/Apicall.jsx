import React,{useEffect, useState} from "react";
export default function Apicall() {

//const[count,setCount]=useState(0);
//const[name,setName]=useState("joy");
const[product,setProduct]=useState([]);

useEffect(()=>{
  handleapi();
},[]);




  const handleapi = async() => {
    let res=await fetch("https://fakestoreapi.com/products");
    let data=await res.json();
    // console.log(data);
    setProduct(data);

            
  };
  return (
    <div>
      {product.map((da) => (
        <div >
          <h1>{da.title}</h1>
          <h1>Price: {da.price}</h1>
          <img src={da.image} alt="product" width="100px" height="100px"/>
        </div>
      ))}
      {/* <button onClick={handleapi}>CLICK ME</button> */}
    </div>
  );
}
