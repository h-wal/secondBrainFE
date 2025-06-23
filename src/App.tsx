import Dashboard from "./pages/dashBorad";
import { SignIn } from "./pages/Signin";
import { Signup } from "./pages/signup";
import { BrowserRouter , Route, Routes} from "react-router-dom";

const App= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/tweets" element={<Dashboard />}></Route>
        <Route path="/dashboard/videos" element={<Dashboard />}></Route>
        <Route path="/dashboard/documents" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
