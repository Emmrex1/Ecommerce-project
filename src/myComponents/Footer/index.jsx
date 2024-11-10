import { FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlay } from "react-icons/fa";
import { FaGoogle, FaApple } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-4 mb-4">
      
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div className="flex items-center justify-center bg-white rounded-full h-10 w-10">
              <FaPhone className="text-gray-500" />
            </div>
            <div>
              <p className="text-xl font-bold">+2349161324504</p>
              <p className="text-gray-500 text-sm">Working 8:00am - 06:00pm</p>
            </div>
          </div>

          
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <span className="text-gray-500">Download App on Mobile:</span>
            <FaGooglePlay className="text-4xl text-gray-700 hover:text-gray-800" />
            <FaApple className="text-4xl text-gray-700 hover:text-gray-800" />
          </div>

          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaInstagram />
            </a>
          </div>
        </div>

    
        <div className="flex flex-col lg:flex-row items-center justify-between text-gray-500 text-sm space-y-4 lg:space-y-0">
          
          <p className="lg:mr-4 text-center lg:text-left">
            Copyright 2024 © Bacola WordPress Theme. All rights reserved.
            Powered by KlbTheme.
          </p>

        
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="hover:underline">
              Cookie
            </a>
          </div>

          
          <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFslIgsEbLh7sgBP96LbZrmEfAgMd3WQkBA&s"
              alt="Payment 1"
              className="h-8"
            />
            <img
              src="https://fabrikbrands.com/wp-content/uploads/PayPal-Logo-History-1-1155x770.png"
              alt="Payment 2"
              className="h-8"
            />
            <img
              src="https://w7.pngwing.com/pngs/363/177/png-transparent-visa-mastercard-logo-visa-mastercard-computer-icons-visa-text-payment-logo.png"
              className="h-8"
            />
            <img
              src="https://icon2.cleanpng.com/20180627/frj/aayjmy6yy.webp"
              alt="Payment 4"
              className="h-8"
            />
            <img src="https://www.freeiconspng.com/uploads/ebay-logo-mac-app-store-26.png" alt="Payment 5" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
