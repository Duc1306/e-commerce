import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Siderbar";
import { createContext, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import {useEffect} from 'react'
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProducUpload from "./pages/ProductUpload";
import "./responsive.css"
import CategoryAdd from "./pages/CategoryAdd";
import Category from "./pages/Category";
import CategoryEdit from "./pages/CategoryEdit";

const MyContext = createContext();

function App() {
  const [isToggleSidebar ,setIsToggleSidebar ] =useState(false)
  const [isLogin, setIsLogin] = useState(false);
    const [isHeaderSidebarShow,setisHeaderSidebarShow] =useState(false)
    const [themeMode ,setthemeMode]= useState(true)

   useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove("dark");
       document.body.classList.add("light");
       localStorage.setItem("themeMode", "light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
   
   },[themeMode])

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isHeaderSidebarShow,
    setisHeaderSidebarShow,
    isLogin,
    setIsLogin,
    themeMode,
    setthemeMode,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderSidebarShow !== true && <Header />}

        <div className="main d-flex">
          <div className="sidebarOverlay d-none false"></div>
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
              <Route path="/products" element={<Products />} />
              <Route path="/product/details" element={<ProductDetails />} />
              <Route path="/product/upload" element={<ProducUpload />} />
              <Route path="/category" element={<Category />} />
              <Route path="/category/add" element={<CategoryAdd />} />
              <Route path="/category/edit/:id" element={<CategoryEdit />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
