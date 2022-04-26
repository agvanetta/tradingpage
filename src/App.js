import "./App.css";
import Bannermid from "./components/Bannermid";
import Bannertop from "./components/Bannertop";
import Bannerbot from "./components/Bannerbot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Holdings from "./components/Holdings";
import Newsfeed from "./components/Newsfeed";
import Stats from "./components/Stats";
import Movements from "./components/Movements";
import Moreinfo from "./components/Moreinfo";
import Crypto from "./components/Crypto";

function App() {
  return (
    <div className="App">
      <Bannertop />
      <div className="app__header"><Header /></div>
      <div className="app__body">
        <div className="app__container"><Newsfeed /><Stats /></div>
      </div>
      <div className="app__bannermid"><Bannermid /></div>
      <div className="app__movements"><Movements/></div>
      <div className="app__crypto"><Crypto/></div>
      <div className="app__bannermid"><Bannerbot /></div>
      <Holdings />
      <div className="app__moreinfo"><Moreinfo/></div>
      <Footer />
    </div>
  );
}

export default App;
