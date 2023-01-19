import Button from './button'
import {render} from '@testing-library/vue'
test('should word', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})

test('default slot should be 按钮', () => {
  const { getByText } = render(Button)
  getByText('按钮')
})

test('slot should be useful', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm'
      }
    }
  })
  getByText('confirm')
})

test('prop type should be useful', () => {
  const { getByRole } = render(Button, {
    props: {
      type:'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('h-button--primary')).toBe(true)
})