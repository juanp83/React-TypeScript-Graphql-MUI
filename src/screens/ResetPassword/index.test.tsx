import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ResetPassword from './index'

describe('ResetPassword', () => {
  beforeEach(() => {
    render(<ResetPassword />)
  })

  test('renders ResetPassword component', () => {

    expect(screen.getByText('ResetPassword.svg')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Reset Password' })).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Reset Password'})).toBeInTheDocument()
  })

  test('User can enter password', () => {
    const passwordTextbox = screen.getByPlaceholderText('Password')
    
    expect(passwordTextbox).toHaveValue('')
    userEvent.type(passwordTextbox, 'sldkfj')
    expect(passwordTextbox).toHaveValue('sldkfj')
  })

  test('User can enter confirm password', () => {
    const confirmPasswordTextbox = screen.getByPlaceholderText('Confirm Password')
    
    expect(confirmPasswordTextbox).toHaveValue('')
    userEvent.type(confirmPasswordTextbox, 'sldkfj')
    expect(confirmPasswordTextbox).toHaveValue('sldkfj')
  })

})