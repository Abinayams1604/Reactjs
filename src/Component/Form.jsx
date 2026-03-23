import React,{useState} from "react";
export default function Forms(){
    const [name,setname]=useState("")
    const [age,setage]=useState()
    const[college,setcollege]=useState("")
    const[email,setemail]=useState("")
    const[phone,setphone]=useState()
    const[city,setcity]=useState("")
    const [view,setview]=useState(false)

    const handlename=(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
}
const handleage=(e)=>{
    console.log(e.target.value)
    setage(e.target.value)
}
const handlecollege=(e)=>{
    console.log(e.target.value)
    setcollege(e.target.value)

}
const handleemail=(e)=>{
    console.log(e.target.value)
    setemail(e.target.value)
}
const handlephone=(e)=>{
    console.log(e.target.value)
    setphone(e.target.value)
}
const handlecity=(e)=>{
    console.log(e.target.value)
    setcity(e.target.value)
}
const handleview=()=>{
    setview(true)
}
return(
    <div>
        <label>Name:</label>
        <input onChange={handlename} type="text" placeholder="Enter your name"/>
        <br></br>
         <br></br>
        <label>Age:</label>
        <input onChange={handleage} type="number" placeholder="Enter your age"/>
        <br></br>
         <br></br>
        <label>College:</label>
        <input onChange={handlecollege} type="text" placeholder="Enter your college name"/>
        <br></br>
         <br></br>
        <label>Email:</label>
        <input onChange={handleemail} type="email" placeholder="Enter your email"/>
        <br></br>
         <br></br>
        <label>Phone:</label>
        <input onChange={handlephone} type="tel" placeholder="Enter your phone number"/>
        <br></br>
         <br></br>
        <label>City:</label>
        <input onChange={handlecity} type="text" placeholder="Enter your city"/>
        <br></br>
         <br></br>
        <button onClick={handleview}>Sumit</button>
         <br></br>
          <br></br>

          {view?
          <div>
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
            <h1>College:{college}</h1>
            <h1>Email:{email}</h1>
            <h1>Phone:{phone}</h1>
            <h1>City:{city}</h1>
          </div>
          :null}

    </div>
)
}