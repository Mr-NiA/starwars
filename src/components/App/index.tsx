import { ThemeProvider } from "@mui/material";
import { FC } from "react";
import theme from "src/theme";
import Router from "../Router";
import "./styles.scss";

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;
