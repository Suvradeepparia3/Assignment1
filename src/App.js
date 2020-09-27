import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import './App.css';

export const UserContext = React.createContext()

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
      <UserContext.Provider value={scrollBar}>
      <Header />
      <SearchBar />
      </UserContext.Provider>
    </div>
  );
}
export default App;

