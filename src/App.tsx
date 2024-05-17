import React from "react";
import logo from "./logo.svg";
import "./App.css";
import selfie from "./images/selfie.jpg";
import pic_bulb from "./images/pic_bulbon.gif";
import linkedin from "./images/linkedin.svg";
import github from "./images/github.svg";
import youtube from "./images/youtube.svg";
import email from "./images/email-round.svg";

function AppHeader() {
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

      <ul id="top-menu-bar">
        <li>
          <a href="#" data-page="home">
            🏡Home
          </a>
        </li>
        <li>
          <a href="#" data-page="skills">
            Skills
          </a>
        </li>
        <li>
          <a href="#" data-page="projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#" data-page="languages">
            Languages
          </a>
        </li>
      </ul>
    </header>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <div id="side-menu">
        <section>
          <form action="secretara.html">
            <h2>
              <span>Contact</span>
            </h2>
            <div>
              <label htmlFor="userEmail">Email</label>
              <input type="email" name="email" id="userEmail" placeholder="your@email.com" required />
            </div>
            <br />
            <div>
              <label htmlFor="userName">Name</label>
              <input type="text" name="name" id="userName" placeholder="Enter your name" required />
            </div>

            <button type="submit">Send</button>
          </form>
        </section>
        <section id="rubik">
          <section>
            <h2>
              <span>Rubik's Face</span>
            </h2>
            <div id="rubik-face">
              <div style={{ background: "#0082df" }}></div>
              <div style={{ background: "#ffff00" }}></div>
              <div style={{ background: "#ff2c0a" }}></div>
              <div style={{ background: "#0082df" }}></div>
              <div style={{ background: "#ffff00" }}></div>
              <div style={{ background: "#ff2c0a" }}></div>
              <div style={{ background: "#0082df" }}></div>
              <div style={{ background: "#ffff00" }}></div>
              <div style={{ background: "#ff2c0a" }}></div>
            </div>
          </section>
        </section>
      </div>

      <div id="main">
        <div id="home" className="page">
          <h2>
            <span>Home</span>
          </h2>
          <p>
            Hi there.✌ <strong>Welcome</strong> to my page.🙂
          </p>
          <p>My name is Voichita Maria Truscai. I'm just a transport manager 🚛 at the moment.</p>
          <p>
            The purpose of this page is to improve my skills📚 and learn more about <b>Web Development</b> with
            <a href="https://nmatei.github.io/#home" target="_blank">
              Matei Nicolae
            </a>
            's help from
            <a href="https://fasttrackit.org/curs-web-cluj-napoca/" target="_blank">
              FastTrackIT
            </a>
            .
          </p>

          <hr />

          <h2>
            <span>Recommendations</span>
          </h2>
          <p>
            You can 👀follow my evolution on
            <a href="https://www.linkedin.com/in/voichita-maria-truscai/" target="_blank">
              LinkedIn
            </a>
            .
          </p>
          <p>
            🧐See my work on
            <a href="https://github.com/sabovoichita" target="_blank">
              {" "}
              GitHub
            </a>
            .
          </p>
        </div>

        <div id="skills" className="page">
          <h2>
            <span>🛠Skills</span>
          </h2>
          <ul></ul>
        </div>

        <div id="projects" className="teams" style={{ display: "block" }}>
          <h2>
            <span>🏆Projects</span>
          </h2>
          <ul></ul>
          <ul>
            <li>
              <a href="">📜2022 -Transport manager certification✅</a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design" target="_blank">
                🤝2022-2023 - FreeCodeCamp- Responsive Web Design ✅
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/become-a-web-developer-from-scratch-step-by-step-guide/
              "
                target="_blank"
              >
                👏2023-2024 - Udemy-Become a Web Developer from Scratch, step by step Guide ✅
              </a>
            </li>
            <li>
              <a
                href="
              https://fasttrackit.org/curs-web-cluj-napoca/"
                target="_blank"
              >
                👩‍🎓2023-2024 - FasttrackIt-- Web Developer Course ✅
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-7582477a-81f2-482c-83ec-09509b131585/
              "
                target="_blank"
              >
                👏2024 - Udemy-Foundations of Web Development: CSS, Bootstrap, JS, React ✅
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">
                💨2023-2024 - FreeCodeCamp- JavaScript Algorithms and Data Structures - In progress🔜
              </a>
            </li>
          </ul>
        </div>

        <div id="languages" className="page">
          <h2>
            <span>✈Known Languages</span>
          </h2>
          <h4 id="languages-table"></h4>
          <table border={1}>
            <thead>
              <tr>
                <th>Language</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="favorite">Romanian</td>
                <td>Native</td>
              </tr>
              <tr>
                <td>English</td>
                <td>Profesional</td>
              </tr>
              <tr>
                <td>French</td>
                <td>Basics</td>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>Basics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/voichita-maria-truscai/" title="LinkedIn" target="_blank">
        <img src={linkedin} width="40px" alt="Linkedin Logo" />
      </a>
      <a href="https://github.com/sabovoichita" title="GitHub" target="_blank">
        <img src={github} width="40px" alt="Github logo" />
      </a>
      <a href="https://www.youtube.com/channel/UCUFk52XTij2scqh_E9jlPiw" title="Youtube" target="_blank">
        <img src={youtube} width="40px" alt="Youtube logo" />
      </a>
      <a href="mailto:sabo_voichita4sacrifice@yahoo.com">
        <img src={email} width="40px" alt="email" />
      </a>
    </footer>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

function Old_App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
