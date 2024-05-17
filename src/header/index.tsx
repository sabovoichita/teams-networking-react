import MainMenu from "../menu/MainMenu";
import selfie from "../images/selfie.jpg";
import pic_bulb from "../images/pic_bulbon.gif";
export default function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="header-picture">
          <img height="100" src={selfie} alt="selfie" />
        </div>
        <div id="header-info">
          <h1>Voichita Maria</h1>
          <p id="job-title">Transport Manager</p>
        </div>
        <div className="toggle-container" id="greyscale">
          <div>
            <img src={pic_bulb} alt="lighton" width="30px" />
          </div>
        </div>
      </div>
      <MainMenu active="teams" />
    </header>
  );
}
