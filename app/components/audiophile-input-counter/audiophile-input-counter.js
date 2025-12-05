import { html, LitElement } from 'lit'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import { EVENTS } from '../../utils/constants/events'

import styles from './audiophile-input-counter.css'

export class AudiophileInputCounter extends LitElement {
  constructor () {
    super()

    this.count = 0
  }

  static get is () {
    return 'audiophile-input-counter'
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      count: { type: Number }
    }
  }

  handlerCount (ev) {
    const counterAction = ev?.target?.id

    this.updateCount(counterAction)
    this.dispatchCounterChange()
  }

  updateCount (action) {
    if (action === 'plus') return this.count++

    if (this.isCountZero) return

    this.count--
  }

  dispatchCounterChange () {
    this.dispatchEvent(new CustomEvent(EVENTS.COUNTER_CHANGE, {
      detail: this.count,
      bubbles: true,
      composed: true
    }))
  }

  get isCountZero () {
    return this.count === 0
  }

  render () {
    return html`
      <section>
        <fontawesome-icon
          id="plus"
          .icon="${faPlus}"
          @click="${(ev) => this.handlerCount(ev)}"
        ></fontawesome-icon>
        <p>${this.count}</p>
        <fontawesome-icon></fontawesome-icon>
        <fontawesome-icon
          id="minus"
          .icon="${faMinus}"
          @click="${(ev) => this.handlerCount(ev)}"
        ></fontawesome-icon>
      </section>
    `
  }
}

customElements.define(AudiophileInputCounter.is, AudiophileInputCounter)
