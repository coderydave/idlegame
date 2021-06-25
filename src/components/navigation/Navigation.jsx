import React, { memo } from "react";
import {
  prestigeIcon,
  upgradeIcon,
  shoppingCartIcon,
  managerIcon,
  optionsIcon,
  playIcon,
  tvIcon,
  coinsIcon,
  gemsIcon,
  wifiIcon,
} from "../../assets/icons";

import "./Navigation.style.scss";

const Navigation = memo(() => {
  const online = window.navigator.onLine;

  return (
    <div className="navigation container">
      <div className="navbar-top">
        <button
          onClick={() => console.log("optionsIcon")}
          className="navtab-top"
        >
          <img className="navicon-top" src={optionsIcon} alt="optionsIcon" />
        </button>
        <div onClick={() => console.log("gem")} className="navtablong">
          <div className="gemview">
            <img className="viewicon" src={gemsIcon} alt="coinsIcon" />
          </div>
        </div>
        <div onClick={() => console.log("money")} className="navtablong">
          <div className="goldview">
            <img className="viewicon" src={coinsIcon} alt="coinsIcon" />
          </div>
        </div>
        <button onClick={() => console.log("tvIcon")} className="navtab-top">
          <img className="navicon-top" src={tvIcon} alt="tvIcon" />
        </button>
      </div>
      {!online && <img className="wifiIcon" src={wifiIcon} alt="wifiIcon" />}
      <div className="navbar-bottom">
        <button
          onClick={() => console.log("upgradeIcon")}
          className="navtab-bottom"
        >
          <img className="navicon-bottom" src={upgradeIcon} alt="upgradeIcon" />
        </button>
        <button
          onClick={() => console.log("managerIcon")}
          className="navtab-bottom"
        >
          <img className="navicon-bottom" src={managerIcon} alt="managerIcon" />
        </button>
        <button
          onClick={() => console.log("prestigeIcon")}
          className="navtab-bottom"
        >
          <img
            className="navicon-bottom"
            src={prestigeIcon}
            alt="prestigeIcon"
          />
        </button>
        <button
          onClick={() => console.log("shoppingCartIcon")}
          className="navtab-bottom"
        >
          <img
            className="navicon-bottom"
            src={shoppingCartIcon}
            alt="shoppingCartIcon"
          />
        </button>
        <button
          onClick={() => console.log("playIcon")}
          className="navtab-bottom"
        >
          <img className="navicon-bottom" src={playIcon} alt="playIcon" />
        </button>
      </div>
    </div>
  );
});

export default Navigation;
