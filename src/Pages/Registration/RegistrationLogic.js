import React, { useState } from 'react'
import generalHandler from '../../handlers/generalHandler';

const RegistrationLogic = () => {

  const [registerForm,setRegistrationForm] = useState({
    fullName:"",
    email:"",
    passwordHash:"",
    companyName:""
  })

  const registerAPI=()=>{
          generalHandler.dataPost(`/v1/register`, registerForm,
          )
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              console.log("response form register form");
            } else {
              console.log("register api error",response);
            }
          })
          .catch((error) => {
            if (error == 404) {
              console.log("having error 404",error);
            }
            console.error("There was an error! - register",error);
          });
  }

  let stateContainer = {
    registerAPI,
    registerForm,
    setRegistrationForm

  }
  return stateContainer
}

export default RegistrationLogic