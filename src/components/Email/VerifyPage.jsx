// Assuming you have set up React Router in your application
import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../config";

const VerifyPage = () => {
  const { token } = useParams();
  const history = useHistory();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get(`${BASE_URL}/auth/verify/${token}`);
        // Verification successful, redirect to success page
        history.push("/verification-success");
      } catch (error) {
        // Verification failed, redirect to error page or display error message
        history.push("/verification-error");
      }
    };

    verifyToken();
  }, [token, history]);

  return (
    <div>
      {/* You can optionally display a loading indicator here */}
      <p>Verifying...</p>
    </div>
  );
};

export default VerifyPage;
