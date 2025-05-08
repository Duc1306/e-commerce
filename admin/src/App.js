import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Siderbar";
import { createContext, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";

const MyContext = createContext();

function App() {
  const [isToggleSidebar ,setIsToggleSidebar ] =useState(false)
  const [isLogin, setIsLogin] = useState(false);
    const [isHeaderSidebarShow,setisHeaderSidebarShow] =useState(false)

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isHeaderSidebarShow,
    setisHeaderSidebarShow,
    isLogin,
    setIsLogin,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderSidebarShow !== true && <Header />}

        <div className="main d-flex">
          {isHeaderSidebarShow !== true && (
            <div
              className={`sidebarWrapper ${
                isToggleSidebar === true ? "toggle" : ""
              }`}
            >
              <Sidebar />
            </div>
          )}

          <div
            className={`content ${isHeaderSidebarShow === true && "full"} ${
              isToggleSidebar === true ? "toggle" : ""
            } `}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
