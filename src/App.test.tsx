import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/app/cases']}>
        <App/>
      </MemoryRouter>
    )
  })

  test('Renders App component (sidebar, topbar, main)', () => {
    expect(screen.getByRole('button', { name: 'open drawer' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'sidebar' })).toBeInTheDocument()
  
    expect(screen.getByRole('banner', { name: 'topbar' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cases' })).toBeInTheDocument()
  
    expect(screen.getByRole('main', { name: 'Main Content' })).toBeInTheDocument()
  
    expect(screen.getByRole('button', { name: 'Cases' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Clients' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Downloads' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Preferences' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Help' })).toBeInTheDocument()
  });

  test('navigates on menu item click', async () => {
    userEvent.click(screen.getByRole('button', { name: 'Clients' }))
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Clients' })).toBeInTheDocument()
    })
  })

})