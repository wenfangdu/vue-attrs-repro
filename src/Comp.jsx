import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  setup(props, { attrs }) {
    //          👇 logs { foo: 'foo' }, not { foo: 'foo', bar: undefined }
    console.log(attrs)

    return () => <div>Comp</div>
  },
})
