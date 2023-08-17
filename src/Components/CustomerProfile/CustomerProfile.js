import React, { useState } from 'react'

const CustomerProfile = () => {

    const [showChangePassword,setChangePassword] = useState(false)

    const stateContainer = {
        setChangePassword,
        showChangePassword
    }
    return stateContainer;
}

export default CustomerProfile