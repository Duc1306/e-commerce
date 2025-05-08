import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import logo from "../../assets/images/logo.png";
import pattern from "../../assets/images/pattern.webp";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const context = useContext(MyContext);

  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPasswors,setIsShowPasswors] =useState(false)

  useEffect(() => {
    context.setisHeaderSidebarShow(true);
  }, []);

  const focusInput =(index) =>{
    setInputIndex(index);
  }
  return (
    <>
      <img src={pattern} className="loginPatern" />
      <section className="loginSection ">
        <div className="loginBox">
          <Link className="d-flex align-items-center flex-column logo" href="/">
            <img src={logo} />
            <span className="ml-2">ECOMMERCE</span>
          </Link>
          <div className="wrapper mt-3 card border">
            <form>
              <div
                className={`form-group position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your email"
                  name="email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                />
              </div>
              <div
                className={`form-group position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={`${isShowPasswors === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="enter your password"
                  name="password"
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                />
                <span
                  className="toggleShowPassword"
                  onClick={() => setIsShowPasswors(!isShowPasswors)}
                >
                  {isShowPasswors === true ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
              </div>
              <div className="form-group">
                <Button className="btn-blue btn-lg w-100 btn-big">
                  Sign In
                </Button>
              </div>
              <div className="form-group text-center mb-0">
                <a className="link">FORGOT PASSWORD</a>
                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                  <span className="line"></span>
                  <span className="txt">or</span>
                  <span className="line"></span>
                </div>
                <Button
                  className="w-100 btn-lg btn-big loginWithGoogle"
                  variant="outlined"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAA9xJREFUeJzF2HtIU1EAx/HMV2VlZmAv04oKwh7gXZaRti3CCHxNsBdUJD0ojAoqiOwlBdU/pkIF9toqRtjT3B8RESUJVlp/mIj2ULfK0k10vu7d1u/YvXCjbfee7eoGnz/EnXO+O/exx6hRPj7MWtVs2AnX4Dk0QSf0QAc0wiu4DNtgmq9rUUQx47DQbngLLkoOeAG5bRpVsMJhqghIhWYfwtypgvUQ6l+YhgnCJIuhHGwKxQnIfJdguq+7FkIOB3xWOEzMye8mQxsXBvnDsGueIq+3aZgwmp0jcT0jFEfuAPE0u5cC1hGIIxpgHk3cFKimXMQCD+EobIRM2AwnwAhdHsaZIVl2XJuWCeYXkhv2HjKk7mn4P7l37oHvorG1sFJ2HL97u2WGsXC4VUt3s8WYKHgAdRBNFWevDBnza/+cbzLiemEd1eTiSI1qNMZHUg/sNYXsAFdXSfTA96wlrJcrLsvXOL8eiLtPAnsrQ51dpdHsj5xFnJvDWgHhgYiLgt6hQF63YTzXnreANa9hnHxgFdXtQOHATHGcwP4g3NFxJG7QkpY4gLhNAYnjA8+7CxxSEeq0FU35iPMyRu58mpPWWbBUIXEk0OQx8K8bdlNwEEVgMVgVYiSBdRKBh2mOCCYtA5dCakigRSJQF8DAFhLYKRG4NoCBVhL4UyIwPYCBNhL4SSJwXwADLSTwpURgUQADG0jgZW+BTRUTXx8yrphAEVgI9TJ1SAQ+I4Hb3YV1m0Kdpkexfel30joZvU5NETgRYmSYCk8kAi+RwDjgxHG/K8c4SsoT+lIMGRziXGAE+o9J3l9ILDRJBG4ZejKi3ogOKXvQmNyfpM928nGEHS6o9Fmy31G8x9mCsHg+cF7iODVehBBYQOLMTyPYA4hDjDhOYIP5ygRa50G1xO41rypsDxICYx4/jLetNqRzbsLEmiDWr7gTQ+dorYwr+NQ/A7HwRYk4QQuofNy5mVAjI64f/v1JBItOgkaZkYNwHmR9+UnU68Lx3L3Lrx5vV59p9XbeCYrdToRJFkKrzEiiB27CLliMkMhEgy6MuaWLIn9DJhTDD2GM6noel3ruHas52eH0EPcVPL9wfrEBikh6t3IdK4sMrObUr/8+HMAqr4cDE4yHKyB1wfgZucGZXFLKqc+0CDs5AAUg/Zshfz6WATuskfocV9LVY47Ucx9IXClESMaJIifAWege3kidfVlZ/ln1aYvs93txZBjkQj3j/ubtr2bYCv5938YEc6FQ4ciXkMAYshV5+xRCE+Eu4/tV7oBK0MJYxcLchE6GbXCbP0z9XoK+wD3YAzNo1/oDy1X2FYVl/88AAAAASUVORK5CYII="
                    width="25px"
                  />
                  &nbsp; Sign In with Google
                </Button>
              </div>
            </form>
          </div>
          <div className="wrapper mt-3 card border footer p-3">
            <span className="text-center">
              Don't have an account?
              <Link className="link color ml-2" to={"/signUp"}>
                Register
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
