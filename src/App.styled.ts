import { createGlobalStyle } from "styled-components";
import { IMAGES } from "constants/images";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;       
    }
    body {font-family: 'Roboto', sans-serif;
    background-image: url(${IMAGES.background});
    background-size: cover;
  }
`;
