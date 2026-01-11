import { html, LitElement, nothing } from 'lit'
import { LocalizeMixin } from '@open-cells/localize'
import { faBars, faChevronRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './audiophile-header.css'

import { routes } from '../../router/routes'

import '../fontawesome-icon/fontawesome-icon'
import '../audiophile-button/audiophile-button'

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

  get renderMobileRoutes () {
    return routes.map((route) => {
      if (route.name === 'home') {
        return nothing
      }

      return html`
        <li>
          <img class="${route.name}" src="${route.navigationMobileImage}" alt="headphones" />
          <p>${this.t(route.label)}</p>
          <audiophile-button variant="icon" .icon="${faChevronRight}">
            <span>SHOP</span>
          </audiophile-button>
        </li>
      `
    })
  }

  toggleMobileMenu () {
    const mobileNav = this.renderRoot.querySelector('.navigation-mobile')

    mobileNav.classList.toggle('open-mobile-menu')
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
            <fontawesome-icon
              class="icon-bars"
              .icon="${faBars}"
              @click="${this.toggleMobileMenu}"
            ></fontawesome-icon>
            <ul>
              ${this.renderRoutes}
            </ul>
          </nav>

          <nav class="navigation-mobile">
            ${this.renderMobileRoutes}
          </nav>

          <fontawesome-icon class="icon-shopping-cart" .icon="${faShoppingCart}"></fontawesome-icon>
        </header>
      </section>
      `
  }
}

customElements.define(AudiophileHeader.is, AudiophileHeader)
