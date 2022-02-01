import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ForgotPassword from './index'

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
    const emailTextbox = screen.getByRole('textbox')
    expect(emailTextbox).toHaveValue('')
    userEvent.type(emailTextbox, 'juan@discoverygenie.com')
    expect(emailTextbox).toHaveValue('juan@discoverygenie.com')
  })

  test('User sees success message', async () => {
    render(<ForgotPassword />)
    userEvent.type(screen.getByRole('textbox'), 'juan@discoverygenie.com')
    userEvent.click(screen.getByRole('button', { name: 'Reset Password' }))

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Success!' })).toBeInTheDocument()
    })
  })

  // test('User can navigate to login screen', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/forgot-password' ]}>
  //       <Routes>
  //           <Route path='/forgot-password' element={<ForgotPassword/>} />
  //           <Route path='/login' element={<Login />} />
  //       </Routes>
  //     </MemoryRouter>
  //   )

  //   userEvent.click(screen.getByRole('link', { name: 'Back to Login' }))

  //   await waitFor(() => {
  //     expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
  //   })
  // })

})