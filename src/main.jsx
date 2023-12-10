import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContextProvider from './Context/ContextProvider.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </ContextProvider>
  </React.StrictMode>,
)
