import React from 'react'
import { render, screen } from '@testing-library/react'

import NotFound from './index'

describe('NotFound', () => {

  test('renders NotFound component', () => {
    render(<NotFound />)

    expect(screen.getByText('NotFound.svg')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Page not found!' })).toBeInTheDocument()
    
  })
})