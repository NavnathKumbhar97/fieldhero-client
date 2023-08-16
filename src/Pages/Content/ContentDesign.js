import React, { useEffect } from 'react'
import CandidateProfileDesign from '../../Components/CandidateProfile/CandidateProfileDesign'
import ContentLogic from './ContentLogic';
import { Card } from '@mui/material';
import CustomerProfileDesign from '../../Components/CustomerProfile/CustomerProfileDesign';

export default function ContentDesign(props) {
  const { data } = props;
    console.log("data.page",data);

    // useEffect(()=>{
    //     console.log("data.page",data.page);
    //     if (data.page === "candidate-profile") {
    //         console.log("data.page",data.page);
    //         <>
    //         <CandidateProfileDesign/>
    //         {/* <div>ContentDesign</div> */}
    //         </>
    //       }
    //     if (data.page === "customer-profile") {
    //         console.log("data.page",data.page);
    //         <>
    //         <CandidateProfileDesign/>
    //         {/* <div>ContentDesign</div> */}
    //         </>
    //       }
    // },[data.page])
    
  return (
    <>
    <Card>
    <CustomerProfileDesign/>
    <div>ContentDesign</div>
    <ContentLogic/>
    </Card>
    </>
  )
}

// export default ContentDesign