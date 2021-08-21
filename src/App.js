
import './App.css';
import Header from './component/common/Header';
import MainCovid from './component/common/MainCovidStats';
import Footer from './component/common/Footer';
import Devprofile from './component/common/DevProfile';
import Continent from './component/common/StatContinent';

function App() {
  return (
    <div className="App">
       <Header/>  
      <MainCovid/>
       <Continent/>
       <Devprofile/>  

       <Footer/>


    </div>
  );
}

export default App;
