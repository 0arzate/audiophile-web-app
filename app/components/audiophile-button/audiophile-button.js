import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './audiophile-button.css'

export class AudiophileButton extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.buttonType = 'default'
  }

  static get is () {
    return 'audiophile-button'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      buttonType: { type: String, attribute: 'button-type' }
    }
  }

  get buttonStyle () {
    return this.buttonType
  }

  render () {
    return html`
      <button class="${this.buttonStyle}"><slot></slot></button>
    `
  }
}

customElements.define(AudiophileButton.is, AudiophileButton)
