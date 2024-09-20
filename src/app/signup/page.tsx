'use client'  
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation' // chexk this hooks comes from next/navigation

export default function SignUpPage() {

  const router = useRouter()

  const [user,setUser] = useState({   
    email : "",
    password: "",
    username: ""
  })

  //We want that after giving the value of all field, the button should be enabled
  const [ButtonDisable,setButtonDisable] = useState(false)    

  const [loading,setLoading] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)  
      const response = await axios.post("/api/users/signup", user) //useing axios we send the data to the backend signup
      console.log("Signup successfully" ,response.data)   //If signup successfully then we get the data
      router.push('/login') //After signup we redirect to login page
      
    } catch (error:any) {
      console.log("SignUp failed")
      toast.error(error.message)
    }
  }

  return (
    <h1>Sign up</h1>
  )
}