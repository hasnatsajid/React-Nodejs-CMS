import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import DashboardOverview from './dashboard/DashboardOverview';
import RouteWithSidebar from './RouteWithSidebar';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

import Test from '../components/Test';
import Categories from '../components/Categories';
import Posts from '../components/Posts';
import NotFound from './NotFound';

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true;
  };

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  };

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />
      <main className="content">
        <Navbar />
        <Routes>
          {/* pages */}
          {/* <Route path="/" element={<RouteWithSidebar />} /> */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
