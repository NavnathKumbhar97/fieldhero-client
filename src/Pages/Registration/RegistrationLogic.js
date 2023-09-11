import React, { useState } from 'react'
import generalHandler from '../../handlers/generalHandler';
import { useNavigate } from 'react-router-dom';

const RegistrationLogic = () => {
  const navigate = useNavigate();
  const [loader,setLoader] = useState(false)
  const [alertMessages,setAlertMessages] = useState(false)
  const [message,setMessage] = useState("")

  const [registerForm,setRegistrationForm] = useState({
    fullName:"",
    email:"",
    passwordHash:"",
    companyName:""
  })

  const registerAPI=()=>{
    setLoader(true)
          generalHandler.dataPost(`/v1/register`, registerForm,
          )
          .then((response) => {
            if (response.status == 201) {
              setAlertMessages(true)
              setMessage(response.data.message)
              setLoader(false)
              navigate("/login")
            } else {
              setLoader(false)
            }
          })
          .catch((error) => {
            if (error == 404 || 400) {
              setLoader(false)
            }
            setLoader(false)
            console.error("There was an error! - register",error);
          });
  }

  let stateContainer = {
    registerAPI,
    registerForm,
    setRegistrationForm,
    loader,alertMessages,
    setAlertMessages

  }
  return stateContainer
}

export default RegistrationLogic