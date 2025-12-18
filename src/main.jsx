import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Provider/AuthContext.jsx'
import { LoginModalProvider } from './Provider/LoginModalContext.jsx'
import { SignupModalProvider } from './Provider/SignupModalContext.jsx'
import { LeftSectionContextProvider } from './Provider/LeftSectionContext.jsx'
import { HeroSectionContextProvider } from './Provider/HeroSectionContext.jsx'
import { BuyModalContextProvider } from './Provider/BuyModalContext.jsx'
import { BrowserRouter } from "react-router-dom";
import { AdminLoginContextProvider } from './Provider/AdminLoginModalContext.jsx'
import { AdminSignupContextProvider } from './Provider/AdminSignupModalContext.jsx'
import { AdminAuthContextProvider } from './Provider/AdminAuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <AdminAuthContextProvider>

      <AdminLoginContextProvider>
      <AdminSignupContextProvider>

      <LoginModalProvider>
        <SignupModalProvider>
        <LeftSectionContextProvider>
        <HeroSectionContextProvider>
          <BuyModalContextProvider>
            <BrowserRouter>

            <App />
            </BrowserRouter>
          </BuyModalContextProvider>
        </HeroSectionContextProvider>
        </LeftSectionContextProvider>
      </SignupModalProvider>
      </LoginModalProvider>
      </AdminSignupContextProvider>
      </AdminLoginContextProvider>
      </AdminAuthContextProvider>
    </AuthProvider>,
)
