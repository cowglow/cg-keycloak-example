import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AuthProvider, AuthProviderProps} from "react-oidc-context";

const AUTH_PROVIDER_CONFIG: AuthProviderProps = {
    authority: import.meta.env.VITE_KEYCLOAK_AUTHORITY,
    client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider {...AUTH_PROVIDER_CONFIG}>
            <App/>
        </AuthProvider>
    </StrictMode>,
)
