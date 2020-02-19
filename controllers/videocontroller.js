import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video detail" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { videoFile, title, description }
  } = req;
  res.redirect(routes.videoDetail(324393));
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete video" });
