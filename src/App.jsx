import { createContext, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./myComponents/header";
import { Footer } from "./myComponents/Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import CategoryMenu from "./myComponents/All Categories/categ";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(""); // Correct naming here

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = (url) => {
    axios
      .get(url)
      .then((response) => {
        if (response.data && response.data.data) {
          setCountryList(response.data.data);
          console.log(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  };

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry, 
  };

  return (
    <MyContext.Provider value={values}>
      <Header />
      <CategoryMenu/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
