import React, { useState } from 'react'
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
     const [Value, setValue] = useState([100, 60000]);
     const [Value2, setValue2] = useState(0);

  return (
    <>
      <div className="sidebar">
        <div className='sticky'>  
        <div className="filterBox">
          <h6> PRODUCT CATEGORIES</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Women" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Beauty" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Kids" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Men" />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox mt-10">
  <h6>FILTER BY PRICE</h6>
  <RangeSlider
    value={Value}
    onInput={setValue}
    min={100}
    max={60000}
    step={5}
  />

  <div className="d-flex pt-2 pb-2 priceRange">
    <span>
      From: <strong className="text-dark">Rs: {Value[0]}</strong>
    </span>
    <span className="ml-auto">
      To: <strong className="text-dark">Rs: {Value[1]}</strong>
    </span>
  </div>
</div>
  
  <div className="filterBox mt-10">
          <h6> PRODUCT STATUS</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="In stock" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label=" On Sale" />
              </li>
            </ul>
          </div>
        </div>

         <div className="filterBox mt-7">
          <h6> BRAND</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Frito Lay" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label=" Nespresso" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Oreo" />
              </li>
              <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Quaker" />
              </li>
                <li>
                <FormControlLabel className='w-[100]' control={<Checkbox />} label="Welch's" />
              </li>

            </ul>
          </div>
        </div>

      
      <Link to="#"> <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className='w-100 mt-10'/></Link>
      </div>
     </div>
    </>
  );
}

export default Sidebar
