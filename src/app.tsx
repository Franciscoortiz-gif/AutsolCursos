import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Log from "./login/log"
import Register from "./login/register"
import Forgot from "./login/forgot"


function App() {
     return(
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/Login" element={<Log></Log>}></Route>
              <Route path="/Register" element={<Register></Register>}></Route>
              <Route path="/forgot" element={<Forgot></Forgot>}></Route>
          </Routes>
        </div>
      </Router>
  )
}

export default App
