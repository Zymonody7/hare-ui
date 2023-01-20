import { defineComponent, inject } from 'vue'
import { inputProps } from './types'
import { FormItemContext } from '../../form-item/src/types'

const NAME = 'h-input'

export default defineComponent({
  name: NAME,
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 注入校验方法
    const formItem = inject('FORM_ITEM_CTX') as FormItemContext
    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      emit('update:modelValue', val)
      formItem.validate()
    }
    return () => (
      <div class="h-input__wrapper">
        <input class="h-input__input" placeholder={ props.placeholderValue } value={ props.modelValue } onInput={onInput} type={ props.type } />
      </div>
    )
  }
})
