import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ForgotPassword from './index'

describe('ForgotPassword', () => {
  beforeEach(() => {
    render(<ForgotPassword />)
  })

  test('renders ForgotPassword component', () => {

    expect(screen.getByText('ForgotPassword.svg')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Password Reset' })).toBeInTheDocument()

    expect(screen.getByText('Enter your E-Mail below to reset your password.')).toBeInTheDocument()
    
    expect(screen.getByRole('textbox', { name: 'E-Mail' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Reset Password' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Back to Login' })).toBeInTheDocument()
    
  })

  test('User can enter email', () => {
    
    expect(screen.getByRole('textbox')).toHaveValue('')

    userEvent.type(screen.getByRole('textbox'), 'juan@discoverygenie.com')

    expect(screen.getByRole('textbox')).toHaveValue('juan@discoverygenie.com')
  })

  test('User sees success message', async () => {

    userEvent.type(screen.getByRole('textbox'), 'juan@discoverygenie.com')

    userEvent.click(screen.getByRole('button', { name: 'Reset Password' }))

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Success!' })).toBeInTheDocument()
      screen.debug()
    })

  })
})