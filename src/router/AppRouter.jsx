import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import RepoDetails from "../pages/RepoDetails.jsx";
import NotFound from "../pages/NotFound.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repo/:owner/:repoName" element={<RepoDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
