import { MyContext } from "@/App";
import React, { useEffect, useContext } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, [context]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-4">
          <img
            src="../../../../src/assets/Images/LOGO.png"
            alt="Shopify Logo"
            className="w-50"
          />
        </div>
        <h2 className="text-3xl font-serif text-center mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email 
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password 
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
            <Link to="/">
              <button
                type="button"
                className="w-full border border-gray-300 text-gray-700 px-14 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
                onClick={() => context.setIsHeaderFooterShow(false)}
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Not Registered?
          <a
            href="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
        <div className="text-center text-gray-500 mt-6">
          Or continue with social account
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full mt-4 border border-gray-300 py-1 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google Icon"
            className="h-10 w-10 "
          />
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
