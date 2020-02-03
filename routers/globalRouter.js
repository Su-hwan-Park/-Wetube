import express from "express";
import routes from "../routes";
import {
  getJoin,
  postJoin,
  logout,
  postLogin,
  getLogin
} from "../controllers/userController";
import { home, search } from "../controllers/videocontroller";
// {}는 export default가 아닐 때 필수

const globalRouter = express.Router();

globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.join, getJoin);

globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.login, getLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
