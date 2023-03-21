import Header from "./Components/Header";
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";


function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-base-100">

      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      
    </div>
  );
}

export default App;
