import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {UserContextProvider} from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <UserContextProvider>
   <ChakraProvider>
      <App />
    </ChakraProvider>
   </UserContextProvider>
  </React.StrictMode>,
)
