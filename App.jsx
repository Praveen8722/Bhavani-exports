import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
// import Products from './components/Products'
// import Process from './components/Process'
// import ContactUs from './components/ContactUs'; // Renamed to a valid identifier

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Process /> */}
      {/* <ContactUs /> */}
    </>
  );
}

export default App;
