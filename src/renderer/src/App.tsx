import { RouteObject, RouterProvider, createMemoryRouter } from 'react-router-dom'
import Home from './pages/home'
import Welcome from './pages/welcome'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />
    // loader: () => FAKE_EVENT
  },
  {
    path: '/home',
    element: <Home />
  }
]

//TODO: Add prop "future={{ v7_startTransition: true }}" in <MemoryRouter>
function App(): JSX.Element {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 1
  })

  return <RouterProvider router={router} />
}

export default App
