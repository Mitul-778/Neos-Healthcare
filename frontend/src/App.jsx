import "./App.css";
import { AllRoutes } from './routes/Routes'
import { Link } from 'react-router-dom'

function App() {
  return <div className="App">
    <div id="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
    </div>
    <AllRoutes/>
  </div>;
}

export default App;
