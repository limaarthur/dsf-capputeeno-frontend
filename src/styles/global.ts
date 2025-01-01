import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --border-radius: 12px;
    --bg-color: #FFFFFF;
    --logo-color: #50504D;
    --bg-secondary: #F3F5F6;
    --bg-primary: #F0F0F5;
    --text-dark: #737380;
    --shapes-dark: #09090A
    --text-dark-2: #41414D;
    --delete-color: #DE3838;
    --orange-low: #FFA585;
    --shapes: #DCE2E5;
    --secondary-text: #617480;
    --bt-primary: #115D8C;
    --border-color: #A8A8B3;
    --success-color: #51B853;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Saira', 'Saira Stencil One', sans-serif;
    background-color: var(--bg-secondary);
  }
`;

