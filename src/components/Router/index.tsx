import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import ErrorPage from "src/Pages/Error";
import StarshipPage from "src/Pages/Starship";
import PeoplePage from "src/Pages/People";
import PlanetPage from "src/Pages/Planet";
import NavBar from "../Navbar";

interface IProps {}

const Router: FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="starship" element={<StarshipPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="planet" element={<PlanetPage />} />
          {/* <Route path="/starship/:id" element={<StarshipPageShow />} />
        <Route path="/people/:id" element={<PeoplePageShow />} />
        <Route path="/planet/:id" element={<PlanetPageShow />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
