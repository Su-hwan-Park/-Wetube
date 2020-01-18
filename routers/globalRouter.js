import express from "express";
import routes from "../routes";
import { join, login, logout } from "../controllers/videocontroller";
import { home, search } from "../controllers/userController";
// {}는 export default가 아닐 때 필수

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
