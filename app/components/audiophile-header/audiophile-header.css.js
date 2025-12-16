
import { css } from 'lit';

export const styles = css`

h2,
nav,
ul,
li {
  margin: 0;
  padding: 0;
}

section {
  background-color: #0E0E0E;
}

header {
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  color: var(--color-white);
  padding: 36px 0px;
  grid-template-areas: "logo nav cart";
}
header .icon-shopping-cart {
  margin: 0px;
  margin-left: auto;
  grid-area: cart;
  cursor: pointer;
  --icon-size: 24px;
  text-align: right;
}
header .icon-shopping-cart:hover {
  color: var(--color-orange);
}

nav {
  grid-area: nav;
}
nav .icon-bars {
  display: none;
  --icon-size: 15px;
}
nav ul {
  list-style: none;
}
nav ul li {
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2.5rem;
  letter-spacing: 0.2rem;
  max-width: min-content;
}
nav ul li:hover {
  color: var(--color-orange);
}

img {
  grid-area: logo;
  width: 143px;
  height: 25px;
}

@media (max-width: 899px) {
  header {
    grid-template-areas: "nav logo cart";
    grid-template-columns: 16px 1fr 1fr;
    gap: 42px;
  }
  nav {
    height: 15px;
    width: 15px;
    margin: auto 0px;
  }
  nav .icon-bars {
    display: inline-block;
  }
  nav ul {
    display: none;
  }
}
@media (max-width: 599px) {
  header {
    grid-template-areas: "nav logo cart";
    grid-template-columns: repeat(3, 1fr);
  }
}
`;

export default styles;
