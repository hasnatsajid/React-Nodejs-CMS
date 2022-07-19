import { Routes, Route } from 'react-router-dom';

import DashboardOverview from './dashboard/DashboardOverview';
import RouteWithSidebar from './RouteWithSidebar';

import Test from '../components/Test';

const HomePage = () => {
  return (
    <>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Test />} />
        <Route path="/overview" element={<RouteWithSidebar path="overview" element={DashboardOverview} />} />
        {/* <Route path={Routers.DashboardOverview.path} element={DashboardOverview} /> */}
      </Routes>
    </>
  );
};

export default HomePage;
