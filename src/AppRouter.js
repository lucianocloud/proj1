import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import NotFound from './pages/NotFound';
// import Header from './components/Header';
// import Footer from './components/Footer';

// function AppRouter() {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default AppRouter;