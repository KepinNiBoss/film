import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/LandingPage.css";
import Intro from "./components/Intro";

function App() {
  return (
    <div>
      {/* Start intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End intro */}
    </div>
  );
}

export default App;
