import MainMenu from "../menu/MainMenu";
import selfie from "../images/selfie.jpg";
import pic_bulb from "../images/pic_bulbon.gif";
import { useState } from "react";
export default function AppHeader() {
  const [active, setActive] = useState("teams");

  // console.warn("render AppHeader", active);
  return (
    <header>
      <div id="header-wrapper">
        <div id="header-picture">
          <img height="100" src={selfie} alt="selfie" />
        </div>
        <div id="header-info">
          <h1>Voichita Maria : {active}</h1>
          <p id="job-title">Transport Manager</p>
        </div>
        <div className="toggle-container" id="greyscale">
          <div>
            <img src={pic_bulb} alt="lighton" width="30px" />
          </div>
        </div>
      </div>
      <MainMenu
        active={active}
        setActive={page => {
          console.warn("active", page);
          setActive(page);
        }}
      />
    </header>
  );
}
