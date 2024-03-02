import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/Redux/user/userSclice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    let userCredentials = {
      email,
      password,
    };

    dispatch(loginUser(userCredentials)).then((result) => {
      const message = result.payload.message;
      if (result.payload) {
        toast.success(message);
        setEmail("");
        setPassword("");
        navigate("/");
      }
      console.log(message);
    });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello ! <span className="text-primaryColor">Welcome</span> Back
        </h3>

        <form action="" className="px-5 md:py-0" onSubmit={handleLogin}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-primaryColor font-medium ml-1"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
