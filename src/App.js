import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "../src/pages/Container";
import UpTo50PersonOffCollection from "../src/pages/UpTo50PersonOffCard.jsx";
import AllWomenCollection from "../src/pages/AllWomenCollection.jsx";
import AllMenCollection from "../src/pages/AllMenCollection.jsx";
import NewInCollection from "./pages/NewInCollection.jsx";
function App () {

  return(
    <div>  
          <Routes>
              <Route path="/" element={ <Container />} />
              <Route path="/collection/new-in" element={<NewInCollection />} />
              <Route path="/collection/summer-sale-2025" element={<UpTo50PersonOffCollection />} />
              <Route path="/collection/all-women" element={<AllWomenCollection />} />
              <Route path="/collection/all-men" element={<AllMenCollection />} />
            </Routes>
   

    </div>


  )

}


export default App;