
import { css } from 'lit';

export const styles = css`

:host {
  --icon-size: 3.5rem;
  --icon-color: var(--text-color);
}

svg {
  width: var(--icon-size);
  height: var(--icon-size);
  color: var(--icon-color);
}
`;

export default styles;
