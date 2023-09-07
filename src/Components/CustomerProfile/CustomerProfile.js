import { useEffect, useState } from 'react'
import generalHandler from '../../handlers/generalHandler'

const CustomerProfile = () => {

    const [showChangePassword,setChangePassword] = useState(false)
    const [loader,setLoader] = useState(false)
    const [customerData,setCustomerData] = useState({
    id: 0,
    fullName: "",
    companyName: "",
    birthDate: "",
    gender: "",
    state: "",
    country: "India",
    profileImage: "",
    isActive: true
    })
    const [alertMessages,setAlertMessages] = useState("")
    const [alertMessage,setAlertMessage] = useState(false)
    const [alertForError,setAlertForError] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const [changePass,setChangePass] = useState({
        new_password:'',
        old_password:''
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

     //get customer data
    const getCustomerData = async () => {
    let authTok = localStorage.getItem("user"); // string
    let convertTokenToObj = JSON.parse(authTok);
    
    setLoader(true);
    await generalHandler
      .dataGet(`/v1/customer/${convertTokenToObj.id}`, {
        headers: { Authorization: `Bearer ${convertTokenToObj.token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setCustomerData(response.data);
          setLoader(false);
        } else if (response.status === 400) {
          setAlertMessages(response.data.message);
          setAlertMessage(true);
          setLoader(false);
          setAlertForError(true)
        }
      })
      .catch((error) => {
        console.error("There was an error!- getCustomerData", error);
        setLoader(false);
        setAlertForError(true)
        setAlertMessage(true);
      });
  };

  const changePasswordAPI=async()=>{
    let authTok = localStorage.getItem("user"); // string
    let convertTokenToObj = JSON.parse(authTok);
    setLoader(true)
        await  generalHandler.dataPost(`/v1/customer/${convertTokenToObj.id}/change-password`, changePass, {
            headers: { Authorization: `Bearer ${convertTokenToObj.token}` },
          })
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
                setLoader(false)
                setChangePassword(false);
                setAlertMessage(true)
            }})
          .catch((error) => {
            if (error.status == 400) {
              setLoader(false)
              setAlertMessage(true)
              setAlertForError(true)
            }
            console.error("There was an error!- createCategory", error);
          });
  }

  useEffect(()=>{
    getCustomerData()
  },[])

    const stateContainer = {
        setChangePassword,
        showChangePassword,
        customerData,loader,
        alertMessages,
        alertMessage,
        setAlertMessage,
        handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    changePass,setChangePass,
    changePasswordAPI,
    alertForError,
    

    }
    return stateContainer;
}

export default CustomerProfile