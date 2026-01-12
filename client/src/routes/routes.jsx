import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import { homeLoader } from "./loaders/homeLoader";

const routes = [
  <Route key={"HomePage"} path="/" element={<HomePage />}></Route>,
  <Route
    key={"ProjectDetailsPage"}
    path="/project/:projectName"
    element={<ProjectDetailsPage />}
  ></Route>,
  <Route
    key={"TestPage"}
    path="/test"
    element={<TestPage />}
    loader={homeLoader}
  ></Route>,
];
export default routes;
