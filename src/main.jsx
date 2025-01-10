import React from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
///hello
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient} clas>
            <App />
    </QueryClientProvider>
)
