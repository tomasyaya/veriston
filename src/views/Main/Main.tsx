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
import { DownloadIcon, LinkIcon } from "../../components/Icons";
import { Icon } from "../../components/Icons/types";
import { Action } from "../../components/Actions/types";
import { SearchBar } from "../../components/SearchBar";

function Main() {
  const { values, handleFilters } = useFilters();
  const query = buildQuery(values, "type");
  const rawFiles = useFiles(query);
  const { search, handleSearch } = useSearch();
  const files = searchFiles(rawFiles, search, "name");
  const [openModal, setOpenModal] = React.useState(false);
  const [defaultPosition, setDefaultPosition] = React.useState(0);
  const handleOpen = () => setOpenModal(true);

  const curriedActions = (file: MediaFile, fileIndex?: number): Action[] => [
    {
      action: () => downloadUrl(file.url, file.name),
      label: "download",
      icon: DownloadIcon as Icon,
    },
    {
      action: callAll(handleOpen, () => {
        setDefaultPosition(fileIndex as number);
      }),
      label: "preview",
      icon: LinkIcon as Icon,
    },
  ];

  return (
    <section>
      <SearchBar onChange={handleSearch} value={search} />
      <div style={{ padding: "20px" }}>
        <h2>Filters</h2>
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
              {files.map((file, i) => (
                <ThumbNail
                  size="small"
                  src={file.url}
                  key={file.id}
                  name={file.name}
                  type={file.type}
                  actions={curriedActions(file, i)}
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
            <ThumbNail
              size="full"
              src={file.url}
              key={file.id}
              name={file.name}
              type={file.type}
            />
          ))}
        </GalleryModal>
      </div>
    </section>
  );
}

export default Main;
