import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="Shoes">
      <div class="card bg-dark text-white border-0">
        <img src="/assets/bg1.jpg" class="card-img" alt="Background" height="550px"/>
        <div class="card-img-overlay ">
            <div className="container">
            </div>
          <h5 class="card-title display-4 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p class="card-text lead fs-2">
            CHECK OUT ALL THE THRENDS
          </p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
