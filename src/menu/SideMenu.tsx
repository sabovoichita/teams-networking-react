import { RubikCube } from "../main/RubikCube";

export function SideMenu() {
  return (
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
          <RubikCube />
        </section>
      </section>
    </div>
  );
}
