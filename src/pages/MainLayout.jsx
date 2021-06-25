import React from "react";
import { wifiIcon } from "../assets/icons/index";
import "./MainLayout.style.scss";

const MainLayout = () => {
  const online = window.navigator.onLine;

  return (
    <div className="main-container">
      <main className="main-field">
        <h1>
          {!online && (
            <img className="wifiIcon" src={wifiIcon} alt="wifiIcon" />
          )}
        </h1>
      </main>
      <h1>Appp</h1>
    </div>
  );
};

export default MainLayout;
