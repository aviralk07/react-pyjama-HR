import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavScrollExample from "./Components/Header";
import Home from "./Components/Home";
import MyCard from "./Components/Card";
import Features from "./Components/Feature";
import Manage from "./Components/Manage";
import PremiumAddOns from "./Components/Primium";
import Evaluate from "./Components/Evaluate";
import Collaborate from "./Components/Collaborate";
import MobileApp from "./Components/Mobile-App";
import Obvious from "./Components/Obvious";
import Questions from "./Components/Questions";
import HappyUser from "./Components/HappyUser";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

const App = () => {
  const signupText = "Signup for FREE"; // Define the signupText here
  const signupText1 = "Know more"; // Define the signupText here

  const buttonProp = (
    <button className="pre-btn mbn-btn">
      <span style={{ fontSize: "17px" }}> 🚀 </span>
      MOBILE APP
    </button>
  );
  return (
    <Router>
      <div className="App">
        <NavScrollExample
          logo="/Assets/images/pyjama-logo.png"
          signupText={signupText}
        />
        <Routes>
          <Route path="/" element={<Home signupText={signupText} />} />
        </Routes>
        <Routes>
          <Route path="/" element={<MyCard />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <Features
                avatarSrc="https://framerusercontent.com/images/YVI0VCxsK4fmuxdskArOMt473s.png?scale-down-to=512"
                username="Sneha Agrawal
                "
                bio="Talent and L&D lead | Rentomojo"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <Manage
                avatarSrc="https://framerusercontent.com/images/ofAi5Y07m62AehR1kIBBhCy2g.png?scale-down-to=512"
                username="Nandha P
                "
                bio="Team Lead - Talent Acquisition | MyCaptain"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <PremiumAddOns
                signupText={signupText1}
                logo="/Assets/images/pyjama-logo.png"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <Evaluate
                avatarSrc="https://framerusercontent.com/images/Ba4Ybd5zbaViB5XUTk5lP4Ho5o.png?scale-down-to=512"
                username="Himanshu Sikka

                "
                bio="
                Manager - HR | Thrillophilia"
              />
            }
          />
        </Routes>{" "}
        <Routes>
          <Route
            path="/"
            element={
              <Collaborate
                avatarSrc="https://framerusercontent.com/images/LoY1mGEUivIsW9Vp4NaFac8l9tg.png?scale-down-to=512"
                username="Gautham Krishna Nair
                "
                bio="HR | Rocket Learning"
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Obvious />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <MobileApp signupText={signupText1} buttonProp={buttonProp} />
            }
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Questions />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <HappyUser buttonProp={buttonProp} signupText={signupText} />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={<Footer />}
            logo="/Assets/images/pyjama-logo.png"
          />
        </Routes>
        <Routes>
          {/* Add a new route for the Login component */}
          <Route path="/login" element={<Login />} />>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
