import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            {tryDemo && (
              <a href={tryDemo}>
                Try Demo
                <i
                  className="fa fa-long-arrow-right mt-2 mx-2"
                  aria-hidden="true"
                ></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} style={{ margin: "0 0 0 90px" }}>
                Learn More
                <i
                  className="fa fa-long-arrow-right mx-2"
                  aria-hidden="true"
                ></i>
              </a>
            )}
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/google-play-badge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstore-badge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
