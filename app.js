import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
// export시 default로 하지 않았기 때문
const app = express();

const handleHome = (req, res) => res.send("Hi from Home");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};
// middlewares

app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// app.get("/", function(req, res) {
//   res.send("Hi from Home");
// });
app.use(routes.home, globalRouter);

app.use(routes.videos, videoRouter);

app.use(routes.users, userRouter);

export default app;
