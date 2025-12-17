import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Provider/AuthContext.jsx'
import { LoginModalProvider } from './Provider/LoginModalContext.jsx'
import { SignupModalProvider } from './Provider/SignupModalContext.jsx'
import { LeftSectionContextProvider } from './Provider/LeftSectionContext.jsx'
import { HeroSectionContextProvider } from './Provider/HeroSectionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LoginModalProvider>
        <SignupModalProvider>
        <LeftSectionContextProvider>
        <HeroSectionContextProvider>

            <App />
        </HeroSectionContextProvider>
        </LeftSectionContextProvider>
      </SignupModalProvider>
      </LoginModalProvider>
    </AuthProvider>
  </StrictMode>,
)
