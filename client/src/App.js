import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import JobsPortal from './components/JobsPortal';
import Footer from './components/Footer';

const App = () => {
  const [searchVal, setSearchVal] = useState('');
  const handleSearchChange = (val) => {
    setSearchVal(val);
  };
  return (
      <div className="App">
        <Navbar/>
        <Search searchVal={searchVal} onChange={handleSearchChange}/>
        <JobsPortal searchVal={searchVal}/>
        <Footer/>
      </div>
  );
};

export default App;
