import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
        <p style={{display:"block",textAlign:"center",fontWeight:"lighter"}} >Instant, zero-cost fund transfers with UPI </p>
      <div className="row mt-5">
      <div className="funds"style={{position:"relative",bottom:"4rem",right:"31rem"}} >
        <Link className="btn btn-green ">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>
     <br />
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored" style={{position:"relative",left:"130px"}}>4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp" style={{position:"relative",left:"130px"}}>3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp" style={{position:"relative",left:"130px"}}>4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p style={{position:"relative",left:"130px"}}>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p style={{position:"relative",left:"130px"}}>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p style={{position:"relative",left:"130px"}}>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p style={{position:"relative",left:"130px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p style={{position:"relative",left:"130px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p style={{position:"relative",left:"130px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p style={{position:"relative",left:"130px"}}>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p style={{position:"relative",left:"130px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p style={{position:"relative",left:"130px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p style={{position:"relative",left:"130px"}}>0.00</p>
            </div>
          </div>
        </div>

        <div className="col"  style={{position:"relative",right:"130px"}}>
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
