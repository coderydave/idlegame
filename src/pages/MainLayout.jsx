import React, { memo } from "react";
import "./MainLayout.style.scss";

const MainLayout = memo(() => {
  return (
    <div className="main-container">
      <main className="main-field"></main>
      <h1>Appp</h1>
    </div>
  );
});

export default MainLayout;
