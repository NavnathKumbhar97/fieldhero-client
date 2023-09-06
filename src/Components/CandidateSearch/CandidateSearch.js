import React, { useEffect, useState } from 'react'
import generalHandler from '../../handlers/generalHandler'

const CandidateSearch = () => {
    const [candidateData,setCandidateData] = useState([])
    const [candidateSkills,setCandidateSkills] = useState([])
    const [candidateIndustry,setCandidateIndustry] = useState([])
    const [loader,setLoader] = useState(false)

    const getCandidateSkills = async() =>{
        let authTok = localStorage.getItem("user"); // string
    let convertTokenToObj = JSON.parse(authTok);
    setLoader(true);
    await generalHandler
      .dataGet(`/v1/skills`, {
        headers: { Authorization: `Bearer ${convertTokenToObj.token}` },
      })
      .then((response) => {
        if (response.status === 200) {
        setCandidateSkills(response.data);
          setLoader(false);
        } else if (response.status === 400) {
          setLoader(false);
        }
      })
      .catch((error) => {
        console.error("There was an error!- getcandidateSkills", error);
        setLoader(false);
      });
    }

    const getCandidateInudstry = async() =>{
        let authTok = localStorage.getItem("user"); // string
    let convertTokenToObj = JSON.parse(authTok);
    setLoader(true);
    await generalHandler
      .dataGet(`/v1/industries`, {
        headers: { Authorization: `Bearer ${convertTokenToObj.token}` },
      })
      .then((response) => {
        if (response.status === 200) {
            setCandidateIndustry(response.data);
          setLoader(false);
        } else if (response.status === 400) {
          setLoader(false);
        }
      })
      .catch((error) => {
        console.error("There was an error!- getcandidateSkills", error);
        setLoader(false);
      });
    }
    const getCandidatesAPICall = async() =>{
        let authTok = localStorage.getItem("user"); // string
    let convertTokenToObj = JSON.parse(authTok);
    setLoader(true);
    await generalHandler
      .dataGet(`/v1/candidates`, {
        headers: { Authorization: `Bearer ${convertTokenToObj.token}` },
      })
      .then((response) => {
        if (response.status === 200) {
            setCandidateData(response.data);
            console.log(response.data);
          setLoader(false);
        } else if (response.status === 400) {
          setLoader(false);
        }
      })
      .catch((error) => {
        console.error("There was an error!- getcandidateSkills", error);
        setLoader(false);
      });
    }

    useEffect(()=>{
        getCandidateSkills()
        getCandidateInudstry()
        getCandidatesAPICall()
    },[])
    const stateContainer ={
        loader,
        candidateIndustry,
        candidateSkills,
    }
  return stateContainer
}

export default CandidateSearch