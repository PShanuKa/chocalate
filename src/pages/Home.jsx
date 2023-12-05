import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Background from "../assets/background.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <div
        className="bg-cover pb-[150px] mb-"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Header />
        <LoginForm />
        <div className="h-[350px]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
