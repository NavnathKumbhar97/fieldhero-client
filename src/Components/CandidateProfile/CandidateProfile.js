import React from 'react'

const CandidateProfile = () => {

  //fetch the company data for candidate master module
  let getCompanyAPIcallCandidate = () => {
    let authTok = localStorage.getItem("user"); // string
    let convertTokenToObj = JSON.parse(authTok);
    setLoader(true);
    handler
      .dataGet(`/v1/all-companies`, {
        headers: { Authorization: `Bearer ${convertTokenToObj.token}` },
      })
      .then((response) => {
        if (response.status == 200) {
          setLoader(false);
          setCompanyCandidate(response.data.data.result);
          console.log("response.data.data.result",response.data.data.result);
        } else if (response.status == 400) {
          setErrMsg(response.data.message);
          setOpenErrtMsg(true);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.error("There was an error!- getCompanyAPIcall", error);
      });
  };
    
  return (
    <div>CandidateProfile</div>
  )
}

export default CandidateProfile