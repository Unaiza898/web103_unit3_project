import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/echolounge',
      element: <LocationEvents index={1} name= "The Echo Lounge & Music Hall"  />
    },
    {
      path: '/houseofblues',
      element: <LocationEvents index={2} name= "House of Blues" />
    },
    {
      path: '/pavilion',
      element: <LocationEvents index={3}  name= "American Airlines Center"/>
    },
    {
      path: '/americanairlines',
      element: <LocationEvents index={4} name=  "The Pavilion at Toyota Music Factory"/>
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App