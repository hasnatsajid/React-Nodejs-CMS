import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Preloader from '../components/Preloader';

import { Routes as Routers } from '../routes';

import DashboardOverview from './dashboard/DashboardOverview';
import Test from '../components/Test';

const RouteWithSidebar = ({ component: Component, ...rest }) => {
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
    <Route
      {...rest}
      render={(props) => (
        <>
          {/* <Preloader show={loaded ? false : true} /> */}
          <Sidebar />

          <main className="content">
            {/* <Navbar /> */}
            <Component {...props} />
            {/* <Footer toggleSettings={toggleSettings} showSettings={showSettings} /> */}
          </main>
        </>
      )}
    />
  );
};

const HomePage = () => {
  <>
    <h1>lljl</h1>
    <Test />
    <Routes>
      {/* pages */}
      <Route path="/" element={Test} />
      <RouteWithSidebar path={Routers.DashboardOverview.path} element={DashboardOverview} />
    </Routes>
  </>;
};

export default HomePage;
