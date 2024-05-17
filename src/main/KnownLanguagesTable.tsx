export function KnownLanguagesTable() {
  return (
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
  );
}
