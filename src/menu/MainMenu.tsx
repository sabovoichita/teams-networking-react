import "./style.css";

type Props = {
  active: string;
};
type Actions = {
  setActive(active: string): void;
};

export default function MainMenu(props: Props & Actions) {
  return (
    <ul id="top-menu-bar">
      <li>
        <a
          href="#"
          className={props.active === "home" ? "active" : ""}
          onClick={() => {
            props.setActive("home");
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className={props.active === "skills" ? "active" : ""}
          onClick={() => {
            props.setActive("skills");
          }}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#"
          className={props.active === "teams" ? "active" : ""}
          onClick={() => {
            props.setActive("teams");
          }}
        >
          Teams
        </a>
      </li>
      <li>
        <a
          href="#"
          className={props.active === "languages" ? "active" : ""}
          onClick={() => {
            props.setActive("languages");
          }}
        >
          Languages
        </a>
      </li>
    </ul>
  );
}
