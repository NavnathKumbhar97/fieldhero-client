import React from "react";

const pageData = () => {
  
  const data = {
    candidateProfile: {
      page: "candidate-profile",
      buttonText: "New",
      pageTitle:"Candidate Profile",
      modalTitle:"Add Candidate"
    },
    
    candUploadBatch: {
      page: "customer-profile",
      buttonText: "Upload",
      pageTitle:"Candidate Upload Batch",
      modalTitle:'Bulk Upload Candidate'

    },
    
  };

  return data;
};

export { pageData };
