import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62,5%;
    scroll-behavior: smooth;
    font-family: 'Popins', sans-serif;
  }
  body {
    background-color: #fff;
    color: #000;

    h1,h2 {
      font-size: 2rem;
      font-weight: 500;
    }

    p {
      opacity: 75%;
      font-size: 1rem;
    }

    ul {
      list-style: none;
    }

    a {
      color: unset;
      text-decoration: none;
    }

    a:hover {
      color: unset;
    }

  }
`;

export default GlobalStyle;
