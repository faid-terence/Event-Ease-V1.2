import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import { PopUp } from "../POPUPS/PopUp";

export const Verify = () => {
  const [verificationResult, setVerificationResult] = useState(null);

  useEffect(() => {
    // Get the token from the URL path
    const token = window.location.pathname.split("/").pop();

    const verifyToken = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/verify/${token}`);
        setVerificationResult(response.data);
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };

    verifyToken();
  }, []);

  return (
    <div>
      {verificationResult && (
        <PopUp title="Success" description="Email Verified" />
      )}
    </div>
  );
};
