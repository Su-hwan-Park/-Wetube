import express from "express";
import routes from "../routes";
// auto import 사용
import {
  videoDetail,
  getUpload,
  postUpload,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
