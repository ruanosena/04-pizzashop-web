import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </>,
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
        ),
      },
    )

    expect(wrapper.getByText('Início').dataset.current).toEqual('false')
    expect(wrapper.getByText('Sobre').dataset.current).toEqual('true')
  })
})
