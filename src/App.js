import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {original,action,comedy} from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={original} title='Netflix Original' clasName='poster'/>
      <RowPost url={action} title='Action' clasName='smallPoster'/>
      <RowPost url={comedy} title='Comedy' clasName='smallPoster'/>
    </div>
  );
}

export default App;
