import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Register from './index'

describe('Register', () => {
  beforeEach(() => {
    render(<Register />)
  })

  test('renders Register component', () => {
    const firstNameTextbox = screen.getByRole('textbox', { name: 'First Name' })
    const lastNameTextbox = screen.getByRole('textbox', { name: 'Last Name' })
    const firmNameTextbox = screen.getByRole('textbox', { name: 'Firm Name' })
    const emailTextbox = screen.getByRole('textbox', { name: 'E-Mail' })
    const passwordTextbox = screen.getByPlaceholderText('Password')
    const confirmPasswordTextbox = screen.getByPlaceholderText('Confirm Password')

    expect(screen.getByText('Register.svg')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Register' })).toBeInTheDocument()

    expect(firstNameTextbox).toBeInTheDocument()
    expect(lastNameTextbox).toBeInTheDocument()
    expect(firmNameTextbox).toBeInTheDocument()
    expect(emailTextbox).toBeInTheDocument()
    expect(passwordTextbox).toBeInTheDocument()
    expect(confirmPasswordTextbox).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Register'})).toBeInTheDocument()
    expect(screen.getByText('Already have an account?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()

  })

  test('User can enter info', () => {
    const firstNameTextbox = screen.getByRole('textbox', { name: 'First Name' })
    const lastNameTextbox = screen.getByRole('textbox', { name: 'Last Name' })
    const firmNameTextbox = screen.getByRole('textbox', { name: 'Firm Name' })
    const emailTextbox = screen.getByRole('textbox', { name: 'E-Mail' })
    const passwordTextbox = screen.getByPlaceholderText('Password')
    const confirmPasswordTextbox = screen.getByPlaceholderText('Confirm Password')

    const userMock = {
      firstName: 'Bob',
      lastName: 'Lob',
      firmName: 'Bob Lob Law',
      email: 'bob@test.com',
      password: 'Aslkjf!'
    }
    
    expect(firstNameTextbox).toHaveValue('')
    expect(lastNameTextbox).toHaveValue('')
    expect(firmNameTextbox).toHaveValue('')
    expect(emailTextbox).toHaveValue('')
    expect(passwordTextbox).toHaveValue('')
    expect(confirmPasswordTextbox).toHaveValue('')

    userEvent.type(firstNameTextbox, userMock.firstName)
    userEvent.type(lastNameTextbox, userMock.lastName)
    userEvent.type(firmNameTextbox, userMock.firmName)
    userEvent.type(emailTextbox, userMock.email)
    userEvent.type(passwordTextbox, userMock.password)
    userEvent.type(confirmPasswordTextbox, userMock.password)

    expect(firstNameTextbox).toHaveValue(userMock.firstName)
    expect(lastNameTextbox).toHaveValue(userMock.lastName)
    expect(firmNameTextbox).toHaveValue(userMock.firmName)
    expect(emailTextbox).toHaveValue(userMock.email)
    expect(passwordTextbox).toHaveValue(userMock.password)
    expect(confirmPasswordTextbox).toHaveValue(userMock.password)
  })

})