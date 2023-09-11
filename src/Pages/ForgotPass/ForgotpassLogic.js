import React, { useState } from 'react'

const ForgotpassLogic = () => {
  const [showText,setShowText] = useState(false)


  const disableShowTextFun=()=>{
    setShowText(false)
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