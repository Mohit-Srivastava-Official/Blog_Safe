 import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import HomePage from "./pages/home.page";
const App = () => {

  return (
<Routes>
<Route path="/" element={<Navbar />}>
<Route index element={<HomePage />} />
<Route path="signin" element={<h1>Sing in page</h1>} />
<Route path="signup" element={<h1>Sing up page</h1>} />
</Route>
</Routes>

  );

};
 
export default App;

 