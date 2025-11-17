// jsx syntax and function component

// function fun(){
// const sentance="how are you";
// const details=<p>im fine</p>

// return (
//     <div>
//         <p>hello </p>
//         {details}
//         <p>{sentance},durgha</p>
        
//     </div>
// )
 
// }
// export default fun;


// props-storing value

// function Student(props){
//     return(
//     <p>hello,{props.name}</p>)
    
// }
// function App(){
//     return (
//         <div>
//             <Student name='Durgha'/>
//         </div>
//     )
// }

// export default App;

// state

// import { useState } from "react";
// import ExampleHook from "./ExampleHook";
// function Counter(){
//     const [count,setCount]=useState(1);
//     return(
//         <div>
//             <h3>Count:{count}</h3>
//             <button onClick={()=>setCount(count+1)}>Increase</button>
//             <ExampleHook count={count} ></ExampleHook>
//         </div>
//     )
// }
// export default Counter;



// event handling

// function clickExample(){
//     function handleclick(){
//         alert('button Clicked')
//     }
//     return <button onClick={handleclick}>Click me</button>
// }
// export default clickExample;

// form validation

// import { useState } from "react";

// function FormExample(){
//     const[name,setname]=useState('');

// }

// usestate hooks

// import { useState } from "react";

// function Fun(){
//     const[value,setvalue]=useState(10);
//     return(
//         <div>
//             <h3>value: {value}</h3>
//             <button onClick={()=>setvalue(value+1)}>Increase</button>
//         </div>
//     )
// }
// export default Fun;


// // useEffect hooks

// import { useState , useEffect} from "react";

// function Timer(){
//     const[seconds,setseconds]=useState(0);

//     useEffect(()=>{

//         const interval = setInterval(()=>setseconds(p=>p+1),1000)
//          return()=>clearInterval(interval);},[]);
//     return <h3>Seconds: {seconds}</h3>
// }
// export default Timer;


// // usecontext hooks

// import { useContext,createContext } from "react";

// const createtheme=createContext('light')

// function Child(){
    
//     const usetheme=useContext(createtheme)
//     return <h2>Theme: {usetheme}</h2>
// }

// function App(){
//     return(
//         <createtheme.Provider value="purple">
//             <Child/>
//         </createtheme.Provider>
//     );
// }
// export default App;

// import { BrowserRouter ,Routes,Route,Link } from "react-router-dom";
// import Home from './Home';
// import About from "./About";

// function App(){
//     return(
//         <BrowserRouter>
//         <nav>
//             <Link to="/">Home</Link>|<Link to="/about">About</Link>
//         </nav>
//         <Routes>
//             <Route path="/" element={<Home />}/>
//             <Route path="/about" element={<About />}/>
           
//         </Routes>
//         </BrowserRouter>
//     );
// }
// export default App;

// import React,{useState, useEffect} from 'react';
// function App(){
//     const[users,setusers]=useState([]);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")   //api url
//         .then(response=>response.json())  //convert repsonse to json
//         .then(data=>setusers(data)) //update state with api data
//         .catch(error=>console.log("error fetching data",error))
//     },[]);//empty dependancy
//     return (
//        <div>
//         <h1>User List</h1>
//         {users.length>0 ?(  //ternary operator
//             <ul>
//                 {users.map(user=>(
//                     <li key={user.id}>
//                         <strong>{user.name}</strong>-{user.email}-<strong>{user.username}</strong>-{user.website}
//                     </li>
//                 ))}
//             </ul>
//         ):(
//             <p>Loading users...</p>
//         )}
//        </div> 
//     );
// }
// export default App;

// import React,{useState, useEffect} from 'react';
// import axios from 'axios' //import axios
// function App(){
//     const[users,setusers]=useState([]);

//     useEffect(()=>{
//         axios
//         .get("https://jsonplaceholder.typicode.com/users")   //api url
//         .then(response=>{setusers(response.data)})
//         .catch(error=>{console.log("error fetching data",error)})
//     },[]);//empty dependancy
//     return (
//        <div>
//         <h1>User List</h1>
//         {users.length>0?(  //ternary operator
//             <ul>
//                 {users.map(user=>(
//                     <li key={user.id}>
//                         <strong>{user.name}</strong>-{user.email}-<strong>{user.username}</strong>-{user.website}
//                     </li>
//                 ))}
//             </ul>
//         ):(
//             <p>Loading users...</p>
//         )}
//        </div> 
//     );
// }
// export default App;


// // conditional rendering ternary operator
// import React,{useState} from "react";
// function App(){
//     const [isloggedin,setisloggedin]=useState(false);
//     const togglelogin=()=>{setisloggedin(!isloggedin)}
//     return(
//         <div style ={{textAlign: "center",marginTop:"50px"}}>
//             <h1>Conditional Rendering Example</h1>
//             {isloggedin? <h1>welcome to login page!</h1>:<h1>please login</h1> }
           
//             <button onClick={togglelogin}>{isloggedin?"Logout":'Login'}</button>
//              </div>
//     )

// }
// export default App;
import React from "react"
function App(){
    const users=['alice','bob','charlie']
    return(
        <div style={{textAlign:"center",marginTop:'50px'}}>
            <h1>UserList</h1>
            <ul style={{listStyle:"none"}}>   
                {users.map((users,index)=>(
                    <li key={index}>{users}</li>
                ))}
            </ul>
        </div>
        
    )
}
export default App;
