import axios from "../../axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../helpers/auth";

const LoginLogic = () => {
  const [errorTextEmail, setErrorTextEmail] = useState();
  const [email, setEmail] = useState("");
  const [errorTextPass, setErrorTextPass] = useState();
  const [pass, setPass] = useState();
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [alertMessages,setAlertMessages] = useState(false)
  const [message,setMessage] = useState("")
  const [loader, setLoader] = useState(false)
  const [openErrMsg,setOpenErrtMsg] = useState(false)
  const navigate = useNavigate();

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;
  const checkEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



const validation = (email) => {
  const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return result.test(String(email).toLowerCase());
}

/**
     * This method responsible for login authentication.
**/
const loginAPIcall = async (e) => {
  setLoader(true)
  try {
      
      // Check for Blank Validation
      if (email !== "" || password !== "") {
          if (
              checkEmail.test(String(email).toLowerCase())
          ) {
              setEmail(email)
              setPassword(password)
              //Login method from helper section call for authentication operation.
              let response = await auth.login(email, password)
              //Check authentication status
              if (response) {
                  let { token,permissions } = response
                  setAlertMessages(true)
                  setLoader(false)
                  // set authorization Header in axios instance
                  axios.defaults.headers = {
                      Authorization: "Bearer " + token,
                  }
                  // Redirect authenticate user to dashboard.
                  setTimeout(() => {
                      navigate("/")
                  }, 1000)
              }else{
              setOpenErrtMsg(true)
              setLoader(false)
              }
          } 
      } 
  } catch (ex) {
      setOpenErrtMsg(true)
      setLoader(false)
  }
}


  return {
    errorTextEmail,
    setErrorTextEmail,
    email,
    setEmail,
    errorTextPass,
    setErrorTextPass,
    password,
    setPassword,
    setPass,
    setShowPass,
    showPass,setErrorTextEmail,
    loginAPIcall,
    loader,alertMessages,
    setAlertMessages 
  };
};

// const mapStateToProps = (state) => {
//   try {
//       return {
//           user: state.user,
//       }
//   } catch (err) {
//       console.error(err)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       loginSuccessful: (user) => dispatch(loginSuccessful(user)),
//   }
// }

export default LoginLogic;
