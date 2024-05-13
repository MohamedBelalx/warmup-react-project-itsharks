import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import loginService from "../service/auth/loginService";
import { Message } from "primereact/message";
import { redirect, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigation } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: null,
    password: null,
  });

  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    loginService(state)
      .then((response) => {
        console.log(response);
        Cookies.set("access_token", response.data.access_token);
      })
      .catch((error) => {
        setIsError(true);
      });
    // redirect("/home");
    navigate("/home");
  };
  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img
            src="/demo/images/blocks/logos/hyper.svg"
            alt="hyper"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </a>
        </div>
        {isError ? <Message severity="error" text="Error Message" /> : null}

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
            onChange={handleChange}
            name="email"
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
            onChange={handleChange}
            name="password"
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <Button
            onClick={handleClick}
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
