import { Route, Routes } from 'react-router-dom';
import Buttons from './components/Buttons';
import TextEditor from './components/TextEditor';
import Forms from './components/Forms';
import Layout from './components/Layout';
import Modals from './components/Modals';
import Notifications from './components/Notifications';
import Overview from './components/Overview';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import Tables from './components/Tables';
import Transactions from './components/Transactions';
import Typography from './components/Typography';
import DataTables from './components/DataTables';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/posts/new" element={<TextEditor />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/bootstrap-tables" element={<Tables />} />
          <Route path="/data-tables" element={<DataTables />} />
          <Route path="/component/buttons" element={<Buttons />} />
          <Route path="/component/notifications" element={<Notifications />} />
          <Route path="/component/forms" element={<Forms />} />
          <Route path="/component/modals" element={<Modals />} />
          <Route path="/component/typography" element={<Typography />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
