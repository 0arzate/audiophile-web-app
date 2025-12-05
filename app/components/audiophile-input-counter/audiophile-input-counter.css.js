
import { css } from 'lit';

export const styles = css`

section {
  display: flex;
  background-color: var(--color-gray);
  max-width: min-content;
  align-items: center;
  padding: 15px;
}

p {
  text-align: center;
  min-width: 16px;
  margin: 0px 20px;
}

fontawesome-icon {
  --icon-size: 13px;
  opacity: 0.25;
}

fontawesome-icon:hover {
  cursor: pointer;
  opacity: 1;
  --icon-color: var(--color-orange);
}
`;

export default styles;
