import { defineComponent } from 'vue'
import { fooProps } from './types'
import { testLog } from '@hare-ui/utils'

const NAME = 'h-foo'

export default defineComponent({
  name: NAME,
  props: fooProps,
  setup (props, context) {
    console.log(props, context)
    const onBtnClick = () => {
      console.log('点击按钮测试', props.msg)
      testLog(props.msg)
    }
    return () => (
      <div class={NAME}>
        <h1>hare-ui Foo</h1>
        <p class={NAME + '__description'}>msg is: { props.msg }</p>
        <button onClick={onBtnClick}>点击我</button>
      </div>
    )
  }
})