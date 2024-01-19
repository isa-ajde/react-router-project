import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as cocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: cocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'error',
        element: <Error />,
      },
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
