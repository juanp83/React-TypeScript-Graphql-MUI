import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Login from './index'

describe('Login', () => {

  test('renders Login component', () => {
    render(<Login />)

    expect(screen.getByText('AccessAccount.svg')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: 'E-Mail' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

    expect(screen.getByText(/by logging in, you agree to the \./i)).toBeInTheDocument()
    
    expect(screen.getByRole('link', { name: /user agreement and terms of use/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Login'})).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Forgot Password' })).toBeInTheDocument()

  })

  test('User can enter email', () => {
    render(<Login />)
    
    expect(screen.getByPlaceholderText('E-Mail')).toHaveValue('')

    userEvent.type(screen.getByPlaceholderText('E-Mail'), 'juan@discoverygenie.com')

    expect(screen.getByPlaceholderText('E-Mail')).toHaveValue('juan@discoverygenie.com')
  })

  test('User can enter password', () => {
    render(<Login />)
    
    expect(screen.getByPlaceholderText('Password')).toHaveValue('')

    userEvent.type(screen.getByPlaceholderText('Password'), 'sldkfj')

    expect(screen.getByPlaceholderText('Password')).toHaveValue('sldkfj')
  })

})