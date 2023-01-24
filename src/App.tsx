import { Routing } from "routing/Routing";
import { GlobalStyle } from "App.styled";
import { ThemeProvider } from "@emotion/react";
import { theme } from "theme/theme";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </>
  );
};
