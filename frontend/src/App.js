import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  useEffect(() => {
    getCountry("https://open.oapi.vn/location/countries");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      console.log(res.data.data);
      setCountryList(res.data.data);
    });
  };
  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>
        <Footer />

        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
