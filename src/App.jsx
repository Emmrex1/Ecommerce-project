import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./Layout/Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
 import CategoryMenu from "./myComponents/All Categories/categ";
import Headerrr from "./Layout/Header";
import TopBar from "./Layout/TopBar";
import TopNav from "./Layout/TopNav";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [IsHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [IsLogin, setIsLogin] = useState(false);

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
    IsHeaderFooterShow,
    setIsHeaderFooterShow,
    IsLogin,
    setIsLogin,
  };

  return (
    <MyContext.Provider value={values}>
      <TopBar />
      <TopNav />

      {IsHeaderFooterShow && <Headerrr />}
       {IsHeaderFooterShow && <CategoryMenu />} 
      <main>
        <Outlet />
      </main>
      {IsHeaderFooterShow && <Footer />}
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
