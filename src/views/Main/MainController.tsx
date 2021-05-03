import { downloadUrl } from "@/utils/downloadUrl";
import { MediaFile } from "@/mocks/types";
import { useFiles, useFilters, useSearch, useGalleryModal } from "./hooks";
import { buildQuery, searchFiles } from "./utils";
import { callAll } from "@/utils/callAll";
import { DownloadIcon, LinkIcon } from "@/components/Icons";
import { Icon } from "@/components/Icons/types";
import { Action } from "@/components/Actions/types";
import { Filters } from "./types";
import Main from "./Main";

function MainController() {
  const { values, handleFilters } = useFilters();
  const query = buildQuery(values, "type");
  const { files: rawFiles, loading } = useFiles(query);
  const { search, handleSearch } = useSearch();
  const files = searchFiles(rawFiles, search, "name");
  const {
    openModal,
    handleClose,
    handleOpen,
    handlePosition,
    defaultPosition,
  } = useGalleryModal();

  const curriedActions = (file: MediaFile, fileIndex?: number): Action[] => [
    {
      action: () => downloadUrl(file.url, file.name),
      label: "download",
      icon: DownloadIcon as Icon,
    },
    {
      action: callAll(handleOpen, () => {
        handlePosition(fileIndex as number);
      }),
      label: "preview",
      icon: LinkIcon as Icon,
    },
  ];
  return (
    <Main
      loading={loading}
      search={search}
      openModal={openModal}
      defaultPosition={defaultPosition}
      curriedActions={curriedActions}
      files={files}
      handleSearch={handleSearch}
      handleFilters={handleFilters}
      handleClose={handleClose}
      filters={values as Filters}
    />
  );
}

export default MainController;
