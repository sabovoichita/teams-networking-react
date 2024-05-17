import "../teams/style.css";

export function TeamsTable() {
  const teams = [
    {
      id: "toze8j1610313009673",
      promotion: "html",
      members: "Nicolae Matei, HTML",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "ezabnf1630345987541",
      promotion: "css",
      members: "Nicolae",
      name: "Names",
      url: "https://github.com/nmatei/nmatei.github.io"
    },
    {
      id: "86mq81630347385708",
      promotion: "js",
      members: "Matei, Andrei",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    },
    {
      id: "w2aal1630347411901",
      promotion: "js",
      members: "FastTrackIT Students, Nicolae",
      name: "Teams Networking",
      url: "https://github.com/nmatei/teams-networking"
    },
    {
      id: "w2aal1630347411902",
      promotion: "react",
      members: "FastTrackIT Students, Nicolae",
      name: "Teams Networking React",
      url: "https://github.com/nmatei/teams-networking-react"
    }
  ];
  return (
    <form id="teamsForm">
      <table border={1} id="teamsTable">
        <colgroup>
          <col className="select-all-column" />
          <col />
          <col />
          <col />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teams.map(({ promotion, members, name, url, id }) => (
            <tr key={id}>
              <td>{promotion}</td>
              <td>{members}</td>
              <td>{name}</td>
              <td>
                <a href={url} target="_blank">
                  {url.replace("https://github.com/", "")}
                </a>
              </td>
              <td>
                <a className="remove-btn">✖</a>
                <a className="edit-btn">&#9998;</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input name="promotion" id="promotion" placeholder="Enter promotion" required />
            </td>
            <td>
              <input name="members" id="members" placeholder="Enter members" required />
            </td>
            <td>
              <input name="name" id="name" placeholder="Enter name" required />
            </td>
            <td>
              <input name="url" id="url" placeholder="Enter project URL" required />
            </td>
            <td>
              <button type="submit">💾</button> <button type="reset">❌</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}
