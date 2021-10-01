import { render, screen } from '@testing-library/react'

import Map from '.'

describe('Map', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'São Paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Diadema',
      slug: 'Diadema',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
    expect(screen.getByTitle(/diadema/i)).toBeInTheDocument()
  })
})
