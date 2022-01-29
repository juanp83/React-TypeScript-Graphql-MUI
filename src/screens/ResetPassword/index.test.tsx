import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ResetPassword from './index'

describe('ResetPassword', () => {

  test('renders ResetPassword component', () => {
    render(<ResetPassword />)

    expect(screen.getByText('ResetPassword.svg')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Reset Password' })).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Reset Password'})).toBeInTheDocument()
  })

  test('User can enter password', () => {
    render(<ResetPassword />)
    
    expect(screen.getByPlaceholderText('Password')).toHaveValue('')

    userEvent.type(screen.getByPlaceholderText('Password'), 'sldkfj')

    expect(screen.getByPlaceholderText('Password')).toHaveValue('sldkfj')
  })

  test('User can enter confirm password', () => {
    render(<ResetPassword />)
    
    expect(screen.getByPlaceholderText('Confirm Password')).toHaveValue('')

    userEvent.type(screen.getByPlaceholderText('Confirm Password'), 'sldkfj')

    expect(screen.getByPlaceholderText('Confirm Password')).toHaveValue('sldkfj')
  })

})