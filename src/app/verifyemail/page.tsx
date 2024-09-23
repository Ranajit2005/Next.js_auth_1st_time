"use client"
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'

export default function VerifyEmailPage() {

  const router = useRouter();

  const [token,setToken] = useState("");  //We are taking the token from the user
  const[verified,setVerified] = useState(false); //We are taking the verified from the user
  const [error,setError] = useState(false); //We are taking the error from the user


  const VerifyUseremail = async () => { 

    try {

      await axios.post("/api/users/verifyemail", {token}); //We are sending the token to the backend. We post method because in verifyemail of backend we use post method

      setVerified(true); //If the email is verified then we set the verified to true
      setError(false); //If the email is verified then we set the error to false
      
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }

  }


  return (
    <div>
      <h1>Verify Email</h1>
    </div>
  )
}
