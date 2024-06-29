import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row p-2 m-3">
        <div className="col-1"></div>
        <div className="col-6 p-5 mb-5">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected ..." />
          <br />
          <div className="row">
            <div className="col-3">
              <a
                href=""
                style={{ textDecoration: "underline", lineHeight: "2.5" }}
              >
                Track account opening
              </a>
            </div>
            <div className="col-3">
              <a
                href=""
                style={{ textDecoration: "underline", lineHeight: "2.5" }}
              >
                Track segment activation
              </a>
            </div>
            <div className="col-3">
              <a
                href=""
                style={{ textDecoration: "underline", lineHeight: "2.5" }}
              >
                Intraday margins
              </a>
            </div>
            <div className="col-3">
              <a
                href=""
                style={{ textDecoration: "underline", lineHeight: "2.5" }}
              >
                Kite user manual
              </a>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a
                href=""
                style={{ textDecoration: "underline", lineHeight: "2.5" }}
              >
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a
                href=""
                style={{ textDecoration: "underline", lineHeight: "2.5" }}
              >
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
