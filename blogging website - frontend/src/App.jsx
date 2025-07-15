
import { Routes, Route, Navigate } from "react-router-dom"; // Routing
import Navbar from "./components/navbar.component"; // Top navigation bar
import UserAuthForm from "./pages/userAuthForm.page"; // Sign in/up form
import { createContext, useEffect, useState } from "react"; // React hooks
import { lookInSession } from "./common/session"; // Session helpers
import HomePage from "./pages/home.page"; // Main landing page


export const UserContext = createContext({}) // Auth context




const App = () => { // Main app component

    const [userAuth, setUserAuth] = useState({}); // Auth state



    useEffect(() => { // On mount, load session
        let userInSession = lookInSession("user"); // Get user from session
        let themeInSession = lookInSession("theme"); // Get theme from session
        userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({ access_token: null }) // Set auth
        // Theme logic skipped
    }, [])



    return (
        <UserContext.Provider value={{userAuth, setUserAuth}}> {/* Provide auth context */}
            <Routes> {/* App routes */}
                <Route path="/" element={<Navbar />}> {/* Navbar always visible */}
                    <Route index element={<HomePage />} /> {/* Home page */}
                </Route>
                <Route path="signin" element={<UserAuthForm type="sign-in" />} /> {/* Sign in */}
                <Route path="signup" element={<UserAuthForm type="sign-up" />} /> {/* Sign up */}
            </Routes>
        </UserContext.Provider>
    );

}

export default App; // Export main app