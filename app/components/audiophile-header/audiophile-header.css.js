
import { css } from 'lit';

export const styles = css`

h2,
nav,
ul,
li,
p {
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
  display: flex;
  gap: 34px;
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

.navigation-mobile {
  display: none;
  box-sizing: border-box;
  width: 100%;
  height: max-content;
  background-color: var(--color-white);
  position: absolute;
  top: 97px;
  left: 0;
  right: 0;
  padding: 32px 40px;
  padding-top: 87px;
  padding-bottom: 0px;
  transform: translateX(-100%);
  transition: transform 1.2s ease;
  will-change: transform;
}
.navigation-mobile li {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 165px;
  background-color: var(--color-gray);
  border-radius: 8px;
  margin-bottom: 68px;
}
.navigation-mobile img {
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
  top: -50%;
  left: 50%;
  transform: translate(-50%, 30%);
  position: absolute;
  display: block;
  margin: 0px auto;
}
.navigation-mobile img.headphones {
  width: 79.92px;
  height: 104px;
}
.navigation-mobile img.speakers {
  width: 84.04px;
  height: 101px;
}
.navigation-mobile img.earphones {
  width: 103px;
  height: 104px;
}
.navigation-mobile p {
  color: var(--color-black);
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.107rem;
  margin-bottom: 17px;
  padding-top: 88px;
}

.open-mobile-menu {
  transform: translateX(0);
}

.active-tab {
  color: var(--color-orange);
}

@media (max-width: 899px) {
  .navigation-mobile {
    display: flex;
    gap: 10px;
  }
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
@media (max-width: 480px) {
  .navigation-mobile {
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
  }
  header {
    grid-template-areas: "nav logo cart";
    grid-template-columns: repeat(3, 1fr);
  }
}
`;

export default styles;
