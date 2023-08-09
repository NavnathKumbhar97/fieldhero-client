import React, { useEffect } from 'react'
import CandidateProfileDesign from '../../Components/CandidateProfile/CandidateProfileDesign'

const ContentDesign = (props) => {
    const {data} = props

    useEffect(()=>{
        if (data.page === "candidate-profile") {
            console.log("data.page",data.page);
            <>
            <CandidateProfileDesign/>
            {/* <div>ContentDesign</div> */}
            </>
          }
    },[data.page])
    
  return (
    <div>ContentDesign</div>
  )
}

export default ContentDesign