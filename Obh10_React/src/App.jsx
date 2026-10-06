import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  //const [users, setUsers] = useState([]);

  // useEffect => whenever my component or my application will render then if we want to do something 
  // with our application certain effects or console, calling api etc .. 

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/Users") // if the url is valid fetch the route
  //   .then(response => response.json()) // whatever response is coming save it as json format
  //   .then((data) => {  // over the data, print it 
  //     console.log(data)
  //     setUsers(data); // change the state of the users
  //   })
  // }, []);

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;