import TopNav from "./components/TopNav";
import Evaluation1 from "./pages/Evaluation1";
import Evaluation2 from "./pages/Evalution2";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
       <TopNav/>

       {/* <div className="max-w-6xl m-auto mb-20">
       <Evaluation1/>
       <Evaluation2/>
       </div> */}

       <div className="max-w-6xl m-auto mb-20">

       <Routes>
          <Route path="/" element={<Evaluation1/>} />
          <Route path="/evaluation2" element={<Evaluation2/>} />
        </Routes>
        </div>
       
    </>
  );
}

export default App;
