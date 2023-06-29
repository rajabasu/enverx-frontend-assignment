import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { Login, Dashboard } from './pages';
import { Header } from './components';
import { setUser, clearUser } from './features/user/userSlice';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        // Store relevant data in session storage
        sessionStorage.setItem('userData', JSON.stringify(userData));
        // Set the user in Redux store
        dispatch(setUser(userData));
      } else {
        // User is signed out
        sessionStorage.removeItem('userData');
        // Clear the user from Redux store
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
