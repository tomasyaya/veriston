import React from "react";
import { findDOMNode } from "react-dom";
import { getFiles } from "../../mocks/services";

function Main() {
  const [files, setFiles] = React.useState({});
  React.useEffect(() => {
    getFiles().then((res) => setFiles(res));
  }, []);

  const rows = Object.values(files).reduce(
    (rows: any[], row) => rows.concat(row),
    []
  );

  return (
    <section>
      <div>
        <label htmlFor="search-bar">Search bar</label>
        <input type="text" id="search-bar" />
        <label htmlFor="audio">audio</label>
        <input type="checkbox" name="audio" id="audio" />
        <label htmlFor="video">video</label>
        <input type="checkbox" name="video" id="video" />
        <label htmlFor="image">image</label>
        <input type="checkbox" name="image" id="image" />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>type</th>
              <th>date</th>
              <th>download</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((file: any) => {
              return (
                <tr key={file.id}>
                  {["name", "type", "date", "url"].map((key, i) => (
                    <td key={key + i}>{file[key]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Main;
