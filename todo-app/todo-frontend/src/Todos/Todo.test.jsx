import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders todo text', () => {
  const todo = { text: 'Buy milk', done: false }

  render(<Todo todo={todo} />)

  expect(screen.getByText('Buy milk')).toBeInTheDocument()
})
