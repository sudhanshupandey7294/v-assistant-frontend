// import React from 'react'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'

// import CTA from './sections/CTA';
// import Footer from './sections/Footer';

// export default function App(){
//   return (
     
//     <div className="min-h-screen flex flex-col">
     
//       <Navbar />
//       <main className="flex-1">
//         <Home />
//       </main>
     

//      <CTA />
//      <Footer />
//     </div>
 
//   )
// }
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Preloader from './components/Preloader'; // make sure path is correct

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Home />
          </main>
          {/* <CTA /> */}
          <Footer />
        </div>
      )}
    </>
  );
}
