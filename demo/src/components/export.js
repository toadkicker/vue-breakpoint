// https://github.com/Akryum/v-tooltip/blob/master/src/index.js

import VShowAt from './ShowAt'
import VBreakpoint from './Breakpoint'
import { Ctor } from './Breakpoint.Ctor'
import breakpoints from '@/assets/js/breakpoints'

export { Ctor } from './Breakpoint.Ctor'
export { Model } from './Breakpoint.Model'

export { default as VShowAt } from './ShowAt'
export { default as VBreakpoint } from './Breakpoint'

export const Install = {
  install(Vue, config = { breakpoints }) {
    Object.keys(new Ctor({ config }))
      .forEach((name, Component) => Vue.component(name, Component))
  }
}

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(Install)
}

export default { VBreakpoint, VShowAt }