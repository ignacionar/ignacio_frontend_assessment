import { css } from "@emotion/react";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: "Lato", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  body {
    font-size: 0.85rem;
    margin: 0;
    letter-spacing: 0.07em;
  }
`;

export default GlobalStyles;
