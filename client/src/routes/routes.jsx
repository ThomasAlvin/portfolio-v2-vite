import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

const routes = [
  <Route key={"HomePage"} path="/" element={<HomePage />}></Route>,
  <Route
    key={"ProjectDetailsPage"}
    path="/project/:projectName"
    element={<ProjectDetailsPage />}
  ></Route>,
  <Route key={"TestPage"} path="/test" element={<TestPage />}></Route>,
];
export default routes;
