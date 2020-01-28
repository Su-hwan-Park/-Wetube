export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video detail" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete video" });
