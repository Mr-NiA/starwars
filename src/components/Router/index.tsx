import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FC } from "react";
import ErrorPage from "src/pages/Error";
import StarshipPage from "src/pages/Starship";
import PeoplePage from "src/pages/People";
import PlanetPage from "src/pages/Planet";
import NavBar from "../Navbar";

interface IProps {}

const Router: FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="" element={<Navigate to="starship" replace />} />
          <Route path="starship" element={<StarshipPage />}>
            <Route path=":id" />
          </Route>
          <Route path="people" element={<PeoplePage />}>
            <Route path=":id" />
          </Route>
          <Route path="planet" element={<PlanetPage />}>
            <Route path=":id" />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
