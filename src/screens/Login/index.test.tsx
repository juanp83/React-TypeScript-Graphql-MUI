import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Login from './index'

describe('Login', () => {

  beforeEach(() => {
    render(<Login />)
  })

  const emailMock = 'juan@discoverygenie.com'
  const passwordMock = 'Aslkjf!'

  test('renders Login component', () => {

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
    const emailTextbox = screen.getByPlaceholderText('E-Mail')
    expect(emailTextbox).toHaveValue('')
    userEvent.type(emailTextbox, emailMock)
    expect(emailTextbox).toHaveValue(emailMock)
  })

  test('User can enter password', () => {
    const passwordTextbox = screen.getByPlaceholderText('Password')
    expect(passwordTextbox).toHaveValue('')
    userEvent.type(passwordTextbox, passwordMock)
    expect(passwordTextbox).toHaveValue(passwordMock)
  })

})