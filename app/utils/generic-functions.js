import { LANGUAGES } from './constants'

export function toggleLanguage () {
  const selectedLang = LANGUAGES[document.documentElement.lang]
  document.documentElement.lang = selectedLang
}
