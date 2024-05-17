import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/TeamsTable";
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

        <div id="teams" className="teams" style={{ display: "block" }}>
          <h2>
            <span>🏆Teams</span>
          </h2>
          <div className="tbar">
            <div>
              <input type="search" name="Search" id="search" placeholder="Search..." />{" "}
              <label htmlFor="search">🔎</label>
            </div>
          </div>
          <TeamsTableWrapper />
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
