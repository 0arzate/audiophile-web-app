import { html, LitElement } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'

import styles from './audiophile-header.css'

import { routes } from '../../router/routes'

import '../fontawesome-icon/fontawesome-icon'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export class AudiophileHeader extends LocalizeMixin(LitElement) {
  static get is () {
    return 'audiophile-header'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {}
  }

  get renderRoutes () {
    return routes.map((route) => html`
      <li>
        ${this.t(route.label)}
      </li>
    `)
  }

  render () {
    return html`
      <section>
        <header>
          <img
            src="https://i.ibb.co/35ktSKYL/audiophile-logo.png"
            alt="audiophile logo"
          >
          <nav>
            <ul>
              ${this.renderRoutes}
            </ul>
          </nav>

          <fontawesome-icon .icon="${faShoppingCart}"></fontawesome-icon>
        </header>
      </section>
      `
  }
}

customElements.define(AudiophileHeader.is, AudiophileHeader)
