import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "../src/pages/Container";
import Home from "../src/pages/Home.jsx";
import AllWomenCollection from "../src/pages/AllWomenCollection.jsx";
import AllMenCollection from "../src/pages/AllMenCollection.jsx";
function App () {

  return(
    <div>  
          <Routes>
              <Route path="/" element={ <Container />} />
              <Route path="/collection/summer-sale-2025" element={<Home />} />
              <Route path="/collection/all-women" element={<AllWomenCollection />} />
              <Route path="/collection/all-men" element={<AllMenCollection />} />
            </Routes>
   

    </div>


  )

}


export default App;