import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './audiophile-input.css'

import '../fontawesome-icon/fontawesome-icon'

export class AudiophileInput extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.label = ''
    this.placeholder = ''
    this.value = ''
    this.name = ''
    this.type = 'text'
    this.pattern = '.*'
    this.isValid = true
    this.required = false
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
      placeholder: { type: String },
      required: { type: Boolean },
      isValid: { type: Boolean },
      value: { type: String },
      name: { type: String },
      pattern: { type: String },
      type: { type: String }
    }
  }

  validateInput (ev) {
    this.isValid = ev.target.checkValidity()
    this.value = ev.target.value
  }

  resetValue () {
    this.value = ''
    this.isValid = true
  }

  render () {
    return html`
      <label>
        <div>
          <p>${this.label}</p>
          <p ?hidden="${this.isValid}">${this.t('audiophile-input.label.error')}</p>
        </div>
        <input
          ?required="${this.required}"
          .value="${this.value}"
          .type="${this.type}"
          name="${this.name}"
          placeholder="${this.placeholder}"
          pattern="${this.pattern}"
          @input="${this.validateInput}"
        />
      </label>
    `
  }
}

customElements.define(AudiophileInput.is, AudiophileInput)
