import React, { useState } from 'react'

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  
  return (
    <div>
      <form >
        <input type='text' placeholder='Enter Phone Number' value={phoneNumber} onChange={handleChangePhoneNumber} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default PhoneOtpForm