import './App.css';
import Bannermid from './components/Bannermid';
import Bannertop from './components/Bannertop';
import Footer from './components/Footer';
import Header from './components/Header';
import Holdings from './components/Holdings';
import Newsfeed from './components/Newsfeed';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
        <Bannertop/>

      {/*header*/}
      <div className='app__header'>
        <Header/>
      </div>
      <div className='app__body'>
        <div className='app__container'>
          <Newsfeed/>
          {/*stats*/}
          <Stats/>
        </div>
      </div>
      <div className="app__bannermid">
      <Bannermid/>
      </div >
      {/*body*/}
      <Holdings/>
       {/*footer*/}
       <Footer/>
    </div>
  );
}

export default App;
