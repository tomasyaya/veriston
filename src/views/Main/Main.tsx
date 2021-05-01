import React from "react";
import { getFiles } from "../../mocks/services";
import { MediaTable } from "../../components/MediaTable";
import { downloadUrl } from "../../utils/downloadUrl";
import { MediaFile } from "../../mocks/types";
import { TabList, Tab, TabPanel, Tabs } from "../../components/Tabs";
import { Gallery } from "../../components/Gallery";
import { ThumbNail } from "../../components/ThumbNail";

function Main() {
  const [files, setFiles] = React.useState<any[]>([]);
  React.useEffect(() => {
    getFiles().then((res) => setFiles(res));
  }, []);
  const curriedActions = (file: MediaFile) => [
    { action: () => downloadUrl(file.url, file.name), label: "download" },
  ];
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
        <Tabs defaultValue="table">
          <TabList>
            <Tab value="table">Table</Tab>
            <Tab value="gallery">Gallery</Tab>
          </TabList>
          <TabPanel value="table">
            <MediaTable curriedActions={curriedActions} mediaFiles={files} />
          </TabPanel>
          <TabPanel value="gallery">
            <Gallery>
              {files.map((file) => (
                <ThumbNail
                  src={file.url}
                  key={file.id}
                  name={file.name}
                  type={file.type}
                />
              ))}
            </Gallery>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default Main;
