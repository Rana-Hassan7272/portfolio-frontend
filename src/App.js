import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './Header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, getUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
import Timeline from './components/Admin/Timeline';
import Project from './components/Admin/Projects';
import Loader from './components/Loader/Loader';

const theme = createTheme();

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  const { user, loading } = useSelector((state) => state.user);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home timelines={user?.timeline} skills={user?.skills} />} />
              <Route path="/about" element={<About about={user?.about} />} />
              <Route path="/projects" element={<Projects projects={user?.projects} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
              <Route path="/admin/timeline" element={isAuthenticated ? <Timeline /> : <Login />} />
              <Route path="/admin/project" element={isAuthenticated ? <Project /> : <Login />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;

