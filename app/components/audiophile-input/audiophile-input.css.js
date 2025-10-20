
import { css } from 'lit';

export const styles = css`

label {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: -0.021rem;
}

input {
  min-width: 56px;
  padding: 18px 24px;
  margin-top: 9px;
  border-radius: 8px;
  border: 1px solid #CFCFCF;
  font-size: 1.4rem;
  letter-spacing: -0.025rem;
  font-weight: bold;
}

input::placeholder {
  opacity: 40%;
}

input:hover {
  border-color: var(--color-orange);
}

input:focus {
  border-color: transparent;
  outline: 1px solid var(--color-orange);
}

input:valid {
  border: 1px solid var(--color-orange);
}

input:invalid {
  border: 2px solid #CD2C2C;
}
`;

export default styles;
