import { html } from 'lit'

import { CorePage } from '../../utils'

import styles from './home-page.css'

import { toggleLanguage } from '../../utils/generic-functions'

import '../../components/audiophile-header/audiophile-header'

export class HomePage extends CorePage {
  constructor () {
    super()

    this.toggleLanguage = toggleLanguage
  }

  static get is () {
    return 'home-page'
  }

  static get styles () {
    return styles
  }

  submitForm (ev) {
    ev.preventDefault()
    console.log('Form submitted')
  }

  render () {
    return html`
      <main>
        <audiophile-header></audiophile-header>
      </main>
    `
  }
}

customElements.define(HomePage.is, HomePage)
