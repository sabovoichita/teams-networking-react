import { SideMenu } from "../menu/SideMenu";
import { KnownLanguagesTable } from "./KnownLanguagesTable";

export function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />

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
          <KnownLanguagesTable />
        </div>
      </div>
    </section>
  );
}
