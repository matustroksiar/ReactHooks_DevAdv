import "./App.css";
import { BrowserRouter,  } from "react-router-dom";
import { AppRoutes } from "./Components/Shared/AppRoutes";


function App() {
  return (
    <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  );
}

export default App;
