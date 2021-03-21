import React from "react";
import "./MainPage.css";
import Ticker from "react-ticker";

function MainPage() {
  return (
    <div className="main_page_container">
      <div className="text-center">
        <h1>Welcome to the main page</h1>
      </div>
      <Ticker>
        {({ index }) => (
          <>
            <span className="mr-3">#HireRichard</span>
            <span className="mr-3">#PleaseHashTagWork</span>
            <span className="mr-3">#MandeepHashTag</span>
            <span className="mr-3">#iCanCodeWithoutTyping</span>
            <span className="mr-3">#HireTheCoolestPersonInTheWorld</span>
            <span className="mr-3">#Richard takes shower twice a day</span>
            <img src="www.my-image-source.com/" alt="" />
          </>
        )}
      </Ticker>
    </div>
  );
}

export default MainPage;
