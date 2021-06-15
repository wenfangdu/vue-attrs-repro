import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    baz: String,
  },
  setup(props, { attrs }) {
    //          👇 logs { baz: undefined }
    console.log(props)
    //          👇 logs { foo: 'foo' }, NOT { foo: 'foo', bar: undefined }
    console.log(attrs)

    return () => <div>Comp</div>
  },
})
