import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDesign from "../Pages/Login/LoginDesign";
import ForgotpassDesign from "../Pages/ForgotPass/ForgotpassDesign";
import RegistrationDesign from "../Pages/Registration/RegistrationDesign";
import Drawer from "../Components/Drawer/Sidebar";

export default function () {

//   let {
//     candidateMaster,
//     candUploadBatch,
//     canVerification,
//     agentMaster,
//     agentPricingTemplate,
//     adminCanUploadBatch,
//     categoryMaster,
//     companyMaster,
//     customerMaster,
//     industyMaster,roleMaster,
//     skillsetMaster,
//     subscriptionMaster,userMaster,
//     batchPriority,
//     otherIndustyCategory,
//     userLoginHistory,
//     userActivity,
//     userActivityAdmin,
//     userLoginActivityAdmin,
    
//   } = pageData()
  return (
    <Router>
      <Routes>
        <Route path="" element={<LoginDesign />}></Route>
        <Route path="/forgot-Password" element={<ForgotpassDesign/>}></Route>
        <Route path="/register" element={<RegistrationDesign/>}></Route>

        {/* the layout */}
        <Route>
          <Route/>
        
            <Route
            path="/dashboard" element={<Drawer/>}
            >

          
        </Route>        
        </Route>
      </Routes>
    </Router>
  );
}
