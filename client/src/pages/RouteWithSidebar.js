import { useState, useEffect } from 'react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

import Routes from '../routes';

const RouteWithSidebar = ({ path, element }) => {
  console.log(path, element);

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

  return <h1>router</h1>;
  //   render={(props) => (
  //     <>
  //       {/* <Preloader show={loaded ? false : true} /> */}
  //       <Sidebar />

  //       <main className="content">
  //         {/* <Navbar /> */}
  //         {/* <Component {...props} /> */}
  //         {/* <Footer toggleSettings={toggleSettings} showSettings={showSettings} /> */}
  //       </main>
  //     </>
  //   )}
};

export default RouteWithSidebar;
