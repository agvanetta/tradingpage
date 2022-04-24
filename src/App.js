import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Holdings from './components/Holdings';
import Newsfeed from './components/Newsfeed';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
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
      {/*body*/}
      <Holdings/>
       {/*footer*/}
       <Footer/>
    </div>
  );
}

export default App;
