// OTP verification
export const loginWithOTP = (userData) => {
  const otp = 252

  if (Number(userData) === otp) {
    return true
  }

  return false
}
