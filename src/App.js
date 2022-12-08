import TopNav from "./components/TopNav";
import Evaluation1 from "./pages/Evaluation1";
import Evaluation2 from "./pages/Evaluation2";
import { Route, Routes } from "react-router-dom";
import Evaluation3 from "./pages/Evaluation3";
import Evaluation4 from "./pages/Evaluation4";
import Evaluation5 from "./pages/Evaluation5";


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
          <Route path="/evaluation3" element={<Evaluation3/>} />
          <Route path="/evaluation4" element={<Evaluation4/>} />
          <Route path="/evaluation5" element={<Evaluation5/>} />
        </Routes>
        </div>
       
    </>
  );
}

export default App;
