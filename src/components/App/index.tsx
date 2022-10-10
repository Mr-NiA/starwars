import { ThemeProvider } from "@mui/material";
import { FC } from "react";
import theme from "src/theme";
import ErrorBoundry from "../ErrorBoundry";
import Router from "../Router";
import "./styles.scss";

const App: FC = () => (
  <ErrorBoundry>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </ErrorBoundry>
);

export default App;
