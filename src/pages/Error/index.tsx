import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ErrorPage: FC = () => (
  <div className="page-404">
    <h1>404 Error</h1>
    <h2>Page not exist</h2>
    <Link to="/">Go home page</Link>
  </div>
);

export default ErrorPage;
