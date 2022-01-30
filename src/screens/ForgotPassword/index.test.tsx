import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import ForgotPassword from './index'
import Login from '../Login'

describe('ForgotPassword', () => {

  test('renders ForgotPassword component', () => {
    render(<ForgotPassword />)

    expect(screen.getByText('ForgotPassword.svg')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Password Reset' })).toBeInTheDocument()

    expect(screen.getByText('Enter your E-Mail below to reset your password.')).toBeInTheDocument()
    
    expect(screen.getByRole('textbox', { name: 'E-Mail' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Reset Password' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Back to Login' })).toBeInTheDocument()
    
  })

  test('User can enter email', () => {
    render(<ForgotPassword />)
    
    expect(screen.getByRole('textbox')).toHaveValue('')

    userEvent.type(screen.getByRole('textbox'), 'juan@discoverygenie.com')

    expect(screen.getByRole('textbox')).toHaveValue('juan@discoverygenie.com')
  })
})