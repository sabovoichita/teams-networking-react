import "../teams/style.css";

export function TeamsTable() {
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
        <tbody></tbody>
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
