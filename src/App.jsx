import { defineComponent } from 'vue'
import Comp from './Comp.jsx'

export default defineComponent({
  setup() {
    return () => <Comp foo='foo' bar={undefined} />
  },
})
