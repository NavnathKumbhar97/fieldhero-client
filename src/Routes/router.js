import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDesign from "../Pages/Login/LoginDesign";
import ForgotpassDesign from "../Pages/ForgotPass/ForgotpassDesign";

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

        {/* the layout */}
        <Route>
          <Route/>
        
            {/* <Route
            path="/forgot-Password" element={<ForgotpassDesign/>}
            > */}

          
        {/* </Route>         */}
        </Route>
      </Routes>
    </Router>
  );
}
