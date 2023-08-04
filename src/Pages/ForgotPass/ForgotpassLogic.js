import React, { useState } from 'react'

const ForgotpassLogic = () => {
  const [showText,setShowText] = useState(false)


  const disableShowTextFun=()=>{
    setShowText(false)
    console.log("showText",showText);
  }

  const stateContainer = 
  {
    showText,
    setShowText,
    disableShowTextFun
}
return stateContainer
}

export default ForgotpassLogic