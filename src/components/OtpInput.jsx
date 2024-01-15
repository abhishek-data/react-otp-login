import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRef = useRef([])

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    }, [])

    const handleChange = (e, index) => {
        const value = e.target.value
        if (isNaN(value)) {
            return
        }
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp)
        if (newOtp.join("").length === length) {
            onOtpSubmit(newOtp.join(""))
        }
        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus()
        }

    }
    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(1, 1)
        if(index>0&& !otp[index-1]){
            inputRef.current[otp.indexOf('')].focus()
        }
    }
    const handleKeydown = (e, index) => {
        const value = e.target.value
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRef.current[index - 1]) {
            inputRef.current[index - 1].focus()
        }
    }
    return (
        <div>
            {otp.map((value, index) => (
                <input
                    type="text"
                    key={index}
                    ref={(input) => inputRef.current[index] = input}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeydown(e, index)}
                    className='otp-input'
                />
            ))}
        </div>
    )
}

export default OtpInput