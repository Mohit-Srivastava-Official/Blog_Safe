import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import HomePage from "./pages/home.page";

const App = () => {

  return (
<Routes>
<Route path="/" element={<Navbar />}>
<Route index element={<HomePage/>}/>
 <Route path="signin" element={<UserAuthForm type="sign-in" />} />
 <Route path="signup" element={<UserAuthForm type="sign-up" />} />
</Route>
</Routes>

  );

};

export default App;

