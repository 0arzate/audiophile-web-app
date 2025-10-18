import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './audiophile-button.css'

import '../fontawesome-icon/fontawesome-icon'

export class AudiophileButton extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.type = 'default'
  }

  static get is () {
    return 'audiophile-button'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      type: { type: String },
      icon: { type: Object }
    }
  }

  get isIconType () {
    return this.type === 'icon'
  }

  render () {
    return html`
      <button class="${this.type}">
        <slot></slot>
        <fontawesome-icon ?hidden="${!this.isIconType}" .icon="${this.icon}"></fontawesome-icon>
      </button>
    `
  }
}

customElements.define(AudiophileButton.is, AudiophileButton)
