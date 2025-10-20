import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './audiophile-input.css'

import '../fontawesome-icon/fontawesome-icon'

export class AudiophileInput extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.label = ''
  }

  static get is () {
    return 'audiophile-input'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      label: { type: String },
      placeholder: { type: String }
    }
  }

  firstUpdated () {
    const input = this.renderRoot.querySelector('input')
    input.addEventListener('invalid', (ev) => {
      console.log('Input value:', input.value, ev)
    })
  }

  validateInput (e) {
    const isValid = e.target.checkValidity()

    if (!isValid) {
      return false
    }
  }

  render () {
    return html`
      <label>
        ${this.label}
        <input
          placeholder="${this.placeholder}"
          pattern="^[0-9]+$"
          @input="${this.validateInput}"
        />
      </label>
    `
  }
}

customElements.define(AudiophileInput.is, AudiophileInput)
