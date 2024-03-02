import React from "react";

export const SignIn = () => {
  return (
    <section>
      <img className="wave" src="img/wave.png" alt="Wave" />
      <div className="container">
        <div className="img">
          <img src="img/bg.svg" alt="Background" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src="img/avatar.svg" alt="Avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
      <script type="text/javascript" src="js/main.js"></script>
    </section>
  );
};
