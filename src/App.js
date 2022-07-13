import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes/routes";


function App() {
  let fireflies = [];
  for (let i = 0; i < 15; i++) {
    fireflies.push(<div className="firefly"></div>);
  }
  return (
    <div className="App">
      {fireflies}
      <BrowserRouter>
        <CustomRoutes/>
      </BrowserRouter>
      <ToastContainer />
    </div>

  );
}

export default App;
