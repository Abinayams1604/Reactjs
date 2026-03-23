import React,{useState} from "react";
function JsonView() {
  const [data, setData] = useState([
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 40}
    
  ]);
    return (
        <div>
            <h1>JSON VIEW</h1>
            {data.map((sa) => (
                <div >
                    <h1>{sa.name}</h1>
                    <h1>Age: {sa.age}</h1>
                </div>
            ))}
        </div>
    );
}
export default JsonView;
