import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
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
