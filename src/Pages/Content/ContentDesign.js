import React from 'react';
import { Card } from '@mui/material';
import CustomerProfileDesign from '../../Components/CustomerProfile/CustomerProfileDesign';
import pageData from "../PageData/PageData"; // Adjust the import path
import CandidateSearchDesign from '../../Components/CandidateSearch/CandidateSearchDesign';

export default function ContentDesign(props) {
  const { data } = props;

  const page = data?.page || '';
  
  const designData =()=>{
    console.log(page);
    switch (page) {
      case 'candidate-profile':
        return(
        <CandidateSearchDesign />
        )
        break;
    
      case 'customer-profile':
        return(
        <CustomerProfileDesign />
        )
        break;
    
      default:
        break;
    }
  }
  return (
    <>
      <Card>
      {designData()}
      </Card>
    </>
  );
}
