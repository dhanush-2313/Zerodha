import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcase-logo.png"
            style={{ width: "50%", height: "50%" }}
          />
          <p className="text-small text-muted mt-3">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streak-logo.png"
            style={{ width: "50%", height: "50%" }}
          />
          <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibull-logo.svg"
            style={{ width: "50%", height: "50%" }}
          />
          <p className="text-small text-muted mt-3">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori.svg"
            style={{ width: "50%", height: "50%" }}
          />
          <p className="text-small text-muted mt-3">
            Fundamental research platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/ditto-logo.png"
            style={{ width: "40%", height: "45%" }}
          />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
