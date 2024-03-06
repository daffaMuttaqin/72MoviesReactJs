import "./style/landingPage.css";
import NavigationBar from "./components/navigationBar";
import Intro from "./components/intro";
import Trending from "./components/trending";
import SuperHero from "./components/superHero";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superHero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
