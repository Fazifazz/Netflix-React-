import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {original,action,comedy, Romance} from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={original} title='Netflix Popular' clasName='poster'/>
      <RowPost url={Romance} title='Romance' clasName='smallPoster'/>
      <RowPost url={comedy} title='Comedy' clasName='smallPoster'/>
      <RowPost url={action} title='Action' clasName='smallPoster'/>
    </div>
  );
}

export default App;
