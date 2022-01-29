import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Register from './index'

describe('Register', () => {

  test('renders Register component', () => {
    render(<Register />)

    expect(screen.getByText('Register.svg')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Register' })).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: 'First Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Last Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Firm Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'E-Mail' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Register'})).toBeInTheDocument()

    expect(screen.getByText('Already have an account?')).toBeInTheDocument()
    
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()

  })

  test('User can enter info', () => {
    render(<Register />)
    
    expect(screen.getByRole('textbox', { name: 'First Name' })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: 'Last Name' })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: 'Firm Name' })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: 'E-Mail' })).toHaveValue('')
    expect(screen.getByPlaceholderText('Password')).toHaveValue('')
    expect(screen.getByPlaceholderText('Confirm Password')).toHaveValue('')

    userEvent.type(screen.getByRole('textbox', { name: 'First Name' }), 'Bob')
    userEvent.type(screen.getByRole('textbox', { name: 'Last Name' }), 'Lob')
    userEvent.type(screen.getByRole('textbox', { name: 'Firm Name' }), 'Bob Lob Law')
    userEvent.type(screen.getByRole('textbox', { name: 'E-Mail' }), 'Bob@BobLobLaw.com')
    userEvent.type(screen.getByPlaceholderText('Password'), 'Asdfjkl!')
    userEvent.type(screen.getByPlaceholderText('Confirm Password'), 'Asdfjkl!')

    expect(screen.getByRole('textbox', { name: 'First Name' })).toHaveValue('Bob')
    expect(screen.getByRole('textbox', { name: 'Last Name' })).toHaveValue('Lob')
    expect(screen.getByRole('textbox', { name: 'Firm Name' })).toHaveValue('Bob Lob Law')
    expect(screen.getByRole('textbox', { name: 'E-Mail' })).toHaveValue('Bob@BobLobLaw.com')
    expect(screen.getByPlaceholderText('Password')).toHaveValue('Asdfjkl!')
    expect(screen.getByPlaceholderText('Confirm Password')).toHaveValue('Asdfjkl!')
  })

})