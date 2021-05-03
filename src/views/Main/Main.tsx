import React from "react";

import { MediaTable } from "../../components/MediaTable";
import { downloadUrl } from "../../utils/downloadUrl";
import { MediaFile } from "../../mocks/types";
import { TabList, Tab, TabPanel, Tabs } from "../../components/Tabs";
import { Gallery } from "../../components/Gallery";
import { ThumbNail } from "../../components/ThumbNail";
import { useFiles, useFilters, useSearch } from "./hooks";
import { buildQuery, searchFiles } from "./utils";
import { GalleryModal } from "../../components/GalleryModal";
import { callAll } from "../../utils/callAll";

function Main() {
  const { values, handleFilters } = useFilters();
  const query = buildQuery(values, "type");
  const rawFiles = useFiles(query);
  const { search, handleSearch } = useSearch();
  const files = searchFiles(rawFiles, search, "name");
  const [openModal, setOpenModal] = React.useState(false);
  const [defaultPosition, setDefaultPosition] = React.useState(0);
  const handleOpen = () => setOpenModal(true);

  const curriedActions = (file: MediaFile, fileIndex?: number) => [
    { action: () => downloadUrl(file.url, file.name), label: "download" },
    {
      action: callAll(handleOpen, () => {
        setDefaultPosition(fileIndex as number);
      }),
      label: "preview",
    },
  ];

  return (
    <section>
      <div>
        <label htmlFor="search-bar">Search bar</label>
        <input
          type="text"
          id="search-bar"
          value={search}
          onChange={handleSearch}
        />
        <label htmlFor="audio">audio</label>
        <input
          type="checkbox"
          name="audio"
          id="audio"
          checked={values.audio}
          onClick={handleFilters}
        />
        <label htmlFor="video">video</label>
        <input
          type="checkbox"
          name="video"
          id="video"
          checked={values.video}
          onClick={handleFilters}
        />
        <label htmlFor="image">image</label>
        <input
          type="checkbox"
          name="image"
          id="image"
          checked={values.image}
          onClick={handleFilters}
        />
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
        <GalleryModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          defaultPosition={defaultPosition}
        >
          {files.map((file) => (
            <div style={{ width: "200px", height: "200px" }}>
              <ThumbNail
                src={file.url}
                key={file.id}
                name={file.name}
                type={file.type}
              />
            </div>
          ))}
        </GalleryModal>
      </div>
    </section>
  );
}

export default Main;
