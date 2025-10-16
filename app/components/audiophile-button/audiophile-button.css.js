
import { css } from 'lit';

export const styles = css`

button {
  text-align: center;
  font-size: 1.3rem;
  min-width: 160px;
  min-height: 48px;
  border: none;
  font-weight: bold;
  letter-spacing: 1px;
}

button:hover {
  cursor: pointer;
}

.default {
  background-color: var(--color-orange);
  color: var(--color-white);
}

.default:hover {
  background-color: var(--color-light-orange);
}

.ghost {
  background-color: transparent;
  border: 1px solid var(--color-black);
  color: var(--color-black);
}

.ghost:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}
`;

export default styles;
