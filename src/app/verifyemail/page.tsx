"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function VerifyEmailPage() {
  // const router = useRouter();

  const [token, setToken] = useState(""); //We are taking the token from the user
  const [verified, setVerified] = useState(false); //We are taking the verified from the user
  const [error, setError] = useState(false); //We are taking the error from the user

  const VerifyUseremail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token }); //We are sending the token to the backend. We post method because in verifyemail of backend we use post method

      setVerified(true); //If the email is verified then we set the verified to true
      setError(false); //If the email is verified then we set the error to false
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    //useEffect is used to run the function when the component is mounted

    //Using simple javascript how we can take token
    const urlToken = window.location.search.split("=")[1]; //We are taking the token from the url and it return an array and the 1st index gives the token
    setToken(urlToken || ""); //We are setting the token to the state

    //Using next js how we can take token
    // const { query } = router; //We are taking the query from the router
    // const urlToken = query.token; //We are taking the token from the query
    // setToken(Array.isArray(urlToken) ? urlToken[0] : urlToken || "");
    
  }, []);

  useEffect(()=>{
    
    setError(false);  //If the email is verified then we set the error to false
    if(token.length > 0){
      VerifyUseremail();
    }

  },[token])


  return (
    <div>
      <h1>Verify Email</h1>
    </div>
  );
}
