import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './audiophile-button.css'

import '../fontawesome-icon/fontawesome-icon'

export class AudiophileButton extends LocalizeMixin(LitElement) {
  constructor () {
    super()

    this.variant = 'default'
    this.type = 'button'
    this.icon = {}
  }

  static get is () {
    return 'audiophile-button'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      buttonType: { type: String, attribute: 'type' },
      variant: { type: String },
      icon: { type: Object }
    }
  }

  get isIconType () {
    return this.variant === 'icon'
  }

  hanldeClick () {
    if (this.buttonType === 'submit') {
      this.requestSubmitForm()
    }

    if (this.buttonType === 'reset') {
      this.requestResetForm()
    }
  }

  requestSubmitForm () {
    const form = this.closest('form')
    const inputs = form.querySelectorAll('audiophile-input')
    const allInputsAreValid = this.validateInputs(inputs)

    if (!allInputsAreValid) return

    if (!form) return

    form.requestSubmit()
  }

  validateInputs (customInputs) {
    if (!customInputs.length) return true

    const invalidInputs = []

    customInputs.forEach((customInput) => {
      const input = customInput.shadowRoot.querySelector('input')

      customInput.validateInput({ target: input })

      if (!customInput.isValid) invalidInputs.push(input)
    })

    return invalidInputs.length === 0
  }

  requestResetForm () {
    const form = this.closest('form')
    const inputs = form.querySelectorAll('audiophile-input')

    if (!inputs.length) return

    inputs.forEach(input => input.resetValue())
  }

  render () {
    return html`
      <button .type="${this.buttonType}" class="${this.variant}" @click="${this.hanldeClick}">
        <slot></slot>
        <fontawesome-icon ?hidden="${!this.isIconType}" .icon="${this.icon}"></fontawesome-icon>
      </button>
    `
  }
}

customElements.define(AudiophileButton.is, AudiophileButton)
