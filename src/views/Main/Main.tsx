import React from "react";
import { MediaTable } from "@/components/MediaTable";
import { TabList, Tab, TabPanel, Tabs } from "@/components/Tabs";
import { Gallery } from "@/components/Gallery";
import { ThumbNail } from "@/components/ThumbNail";
import { GalleryModal } from "@/components/GalleryModal";
import { SearchBar } from "@/components/SearchBar";
import { MainProps } from "./types";

function Main({
  handleSearch,
  search,
  filters,
  handleFilters,
  curriedActions,
  openModal,
  handleClose,
  files,
  defaultPosition,
  loading,
}: MainProps) {
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
          checked={filters.audio}
          onClick={handleFilters}
        />
        <label htmlFor="video">video</label>
        <input
          type="checkbox"
          name="video"
          id="video"
          checked={filters.video}
          onClick={handleFilters}
        />
        <label htmlFor="image">image</label>
        <input
          type="checkbox"
          name="image"
          id="image"
          checked={filters.image}
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
            <MediaTable
              curriedActions={curriedActions}
              mediaFiles={files}
              loading={loading}
            />
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
          onClose={handleClose}
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
