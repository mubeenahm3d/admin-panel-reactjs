import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root{
  --bg: "#F7F9FC";
  --bgContainer: "#FFFFFF";
  --textPrimary: "#080808";
  --textSecondary: "#c4c4c4";
  --heading: "#000000de";
  --shadow: "#eae7e7"
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  background-color: var(--bg);
  font-family: sans-serif;
  overflow-x: hidden;
  transition: .3s all;
}
a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
}
li {
  list-style: none;
}
h1 {
  font-size: 2.4rem;
}
h2 {
  font-size: 3rem;
}
h3,h4,h5{
  font-size: 1.8rem;
}
p {
  font-size: 1.6rem;
}
`
export default GlobalStyles