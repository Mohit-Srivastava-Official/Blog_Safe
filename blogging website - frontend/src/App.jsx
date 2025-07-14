import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
<<<<<<< HEAD
import HomePage from "./pages/home.page";
=======
import UserAuthForm from "./pages/userAuthForm.page";

>>>>>>> 9188b9fb2df8295fcd3f7a14df69822fc5ef46df
const App = () => {

  return (
<Routes>
<Route path="/" element={<Navbar />}>
<<<<<<< HEAD
<Route index element={<HomePage />} />
<Route path="signin" element={<h1>Sing in page</h1>} />
<Route path="signup" element={<h1>Sing up page</h1>} />
=======
 <Route path="signin" element={<UserAuthForm type="sign-in" />} />
 <Route path="signup" element={<UserAuthForm type="sign-up" />} />
>>>>>>> 9188b9fb2df8295fcd3f7a14df69822fc5ef46df
</Route>
</Routes>

  );

};

export default App;

