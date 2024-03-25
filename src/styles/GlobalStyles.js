import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --main-color:#001C32;
  --hover-color: #C89C4E;
  --color-grey-200: #e5e7eb;
  --color-grey-500: #6b7280;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 17px;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--main-color);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  background-color: white;
  max-width:90rem;
  margin: auto;
  position:relative;
}

input,
textarea,
select {
  font: inherit;
  color: inherit;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  resize: vertical;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid gray;
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
span {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  object-fit:cover;
}
`;

export default GlobalStyles;
