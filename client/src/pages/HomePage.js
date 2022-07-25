import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

import Categories from '../components/Categories';
import Posts from '../components/Posts';
import NotFound from './NotFound';
import Settings from '../components/Settings';

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />
      <main className="content">
        <Navbar />
        <Routes>
          {/* pages */}
          <Route path="/" element={<Categories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/new" element={<Categories />} />
          <Route path="/categories/update/:id" element={<Categories />} />
          <Route path="/categories/delete/:id" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/new" element={<Posts />} />
          <Route path="/posts/update/:id" element={<Posts />} />
          <Route path="/posts/delete/:id" element={<Posts />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
