import React from "react";
import Home from "./pages/Home";
import Login from "./pages/login";
import Notfound from "./pages/Notfound";
import Register from "./pages/register";
import { BrowserRouter, Routes , Route , Navigate  } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
   


function Logout(){
   localStorage.clear()
    return <Navigate to= "/login"/>
}


function RegisterAndLogout(){
   localStorage.clear()
   return <Register/>
}
   function  App(){
      return (
         <>
         <BrowserRouter>
         <Routes>
            <Route 
            path = "/"
            element ={
               <ProtectedRoute>
                  <Home/>
               </ProtectedRoute>
            } 
            />
            <Route  path = "/login"  element = {<Login/>} />
            <Route  path = "/logout"  element = {<Logout/>} />

             <Route  path = "/home"  element = {<Home/>} />
              <Route  path = "/notfound"  element = {<Notfound/>} />
               <Route  path = "/register"  element = {<Register/>} />
         </Routes>
         </BrowserRouter>
         
         </>
      )
   }

   export default App 