import React from 'react';
import { Card } from '@mui/material';
import CustomerProfileDesign from '../../Components/CustomerProfile/CustomerProfileDesign';
import pageData from "../PageData/PageData"; // Adjust the import path
import CandidateSearchDesign from '../../Components/CandidateSearch/CandidateSearchDesign';
import CandidateProfileDesign from '../../Components/CandidateProfile/CandidateProfileDesign';

export default function ContentDesign(props) {
  const { data } = props;

  const page = data?.page || '';
  
  const designData =()=>{
    console.log(page);
    switch (page) {
      case 'candidate-search':
        return (
        <CandidateSearchDesign />
        )
        break;
    
      case 'customer-profile':
        return (
        <CustomerProfileDesign />
        )
        break;
      case 'candidate-profile':
        return (
        <CandidateProfileDesign/>
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
