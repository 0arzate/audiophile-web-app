import { html } from 'lit'

import { CorePage } from '../../utils'

import styles from './home-page.css'

import { toggleLanguage } from '../../utils/generic-functions'

import '../../components/audiophile-button/audiophile-button'

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

  render () {
    return html`
      <main>
        <section>
          <h1>${this.t('home-page.title')}</h1>
          <div>
            <audiophile-button
              @click="${this.toggleLanguage}"
            >
              ${this.t('home-page.button.lang')}
            </audiophile-button>
          </div>
        </section>
      </main>
    `
  }
}

customElements.define(HomePage.is, HomePage)
