module.exports = `js
import { VBreakpoint, VBreakpointModel } from 'vue-breakpoint-component'

export default {
  components: {
    VBreakpoint
  },
  data: () => ({
    model: new VBreakpointModel()
  }),
  computed: {
    style() {
      if (this.model.isSmall) {
        return {
          width: 1rem,
          height: 1rem
        }
      }
      if (this.model.isMedium) {
        return {
          width: 2rem,
          height: 2rem
        }
      }
      if (this.model.isLarge) {
        return {
          width: 3rem,
          height: 3rem
        }
      }
    }
  }
}
`