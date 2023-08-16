import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDesign from "../Pages/Login/LoginDesign";
import ForgotpassDesign from "../Pages/ForgotPass/ForgotpassDesign";
import RegistrationDesign from "../Pages/Registration/RegistrationDesign";
import Drawer from "../Components/Drawer/Sidebar";
import CustomerProfileDesign from "../Components/CustomerProfile/CustomerProfileDesign";
import ContentDesign from "../Pages/Content/ContentDesign";
import { pageData } from "../Pages/PageData/PageData";

export default function () {
  let { candidateProfile } = pageData;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginDesign />}></Route>
        <Route path="/forgot-Password" element={<ForgotpassDesign/>}></Route>
        <Route path="/register" element={<RegistrationDesign/>}></Route>
        {/* <Route path="/dashboard" element={<Drawer/>} /> */}


        {/* the layout */}
        <Route path="" element={<Drawer />}>
          {/* <Route path="" element={<Drawer/>} /> */}
        
          <Route path="candidate-profile" element={<ContentDesign data={candidateProfile}/>}>

          </Route>
          <Route path="customer-profile" element={<ContentDesign />}></Route>
          <Route path="candidate-search" element={<ContentDesign />}></Route>
          
        </Route>
      </Routes>
    </Router>
  );
}
