import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useAuth} from "react-oidc-context";

export default function App() {
    const auth = useAuth()

    const buttonLabel = !auth.isAuthenticated ? "Sign In" : "Sign Out"
    const buttonAction = !auth.isAuthenticated ? auth.signinRedirect : auth.signoutRedirect
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            {auth.user && <pre>{JSON.stringify(auth.user, null, 2)}</pre>}
            <div className="card">
                <button onClick={() => buttonAction()}>
                    {buttonLabel}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
