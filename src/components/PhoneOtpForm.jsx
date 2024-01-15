import React, { useState } from 'react'
import {z} from 'zod'
import OtpInput from './OtpInput'

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showOtpInput, setShowOtpInput] = useState(false)
  
  const mySchema = z.string().regex(/^\d{10}$/)

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const result = mySchema.safeParse(phoneNumber)
    if (!result.success) {
      alert('Invalid phone number')
      return
    }
    setShowOtpInput(true)
  }

  const onOtpSubmit = (otp) => {
    console.log(otp)
  }
  return (
    <div className='form-container'>
      {!showOtpInput? (
        <form onSubmit={handleFormSubmit}>
        <input type='text' placeholder='Enter Phone Number' value={phoneNumber} onChange={handleChangePhoneNumber} />
        <button type='submit'>Submit</button>
      </form>
      ):(<>
        <p>Enter Otp sent to: {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </>
      )}
    </div>
  )
}

export default PhoneOtpForm