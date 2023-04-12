import Header from "./Components/Header";
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";



function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-base-100">

      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
