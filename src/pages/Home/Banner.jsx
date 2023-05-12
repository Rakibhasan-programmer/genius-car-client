import React from "react";

const Banner = () => {
  return (
    <div>
      <header className="banner d-flex justify-content-center align-items-center text-center">
        <div className="text-white">
          <h2 className="display-4 fw-bold">
            Looking for a Complete <br />
            Solutions for your Car ?
          </h2>
          <p className="pt-2 pb-4 w-75 mx-auto fw-light">
            we are expert in car repairings with 20+ years of professional
            experience. We have a lot of experts for different problems.
          </p>
          <div>
            <button
              className="btn btn-primary px-4 py-2 text-white"
              type="submit"
            >
              Get free tips
            </button>
            <button className="btn btn-secondary ms-2 px-4 py-2" type="submit">
              Learn More
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
