import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import FetchingData from './Components/FetchingData';
import './App.css';

function App() {

  const [ scrollBar, setScrollBar ] = useState(0)

  useEffect(() => {
    window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          setScrollBar(scrollBar + 1)
      }
    }
    // eslint-disable-next-line
  },[window.scrollY])
  

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FetchingData bar={scrollBar}/>
    </div>
  );
}
export default App;

