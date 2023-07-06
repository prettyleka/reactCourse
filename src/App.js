import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path = 'directory/:campsiteId' element={<CampsiteDetailPage />}/>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
