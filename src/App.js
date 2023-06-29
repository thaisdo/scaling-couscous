import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51NLImwJmkAGlpg5GDIZyfwqZ4XNTwxiV1HQGkQpxMf8hTziyFTRdn73Wa5zO4PE2qqwDIhAKEoeYdC5ouVYQ7BAE00oWJJMx1d'
);

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // vai rodar uma vez
    auth.onAuthStateChanged(authUser => {
      console.log("USER IS = ", authUser);

      if (authUser) {
        // just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Login />
              </React.Fragment>
            }
          />
          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
          <Route
            path="/payment"
            element={
              <React.Fragment>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </React.Fragment>
            }
          />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Home />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
