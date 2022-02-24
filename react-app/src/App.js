import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import QuestionList from './components/QuestionList/QuestionList';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';
import StyleGuide from './components/StyleGuide/StyleGuide';
import SplashPage from './components/SplashPage/SplashPage';
import About from './components/About/About';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {sessionUser && (
        <NavBar />
      )}
      <Switch>
        <Route path='/login' exact={true}>
          <SplashPage />
        </Route>
        <Route path='/style' exact={true}>
          <StyleGuide />
        </Route>
        <ProtectedRoute path='/about' exact={true}>
          <About />
        </ProtectedRoute>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <div className='main-page'>
            <QuestionList />
          </div>
        </ProtectedRoute>
        <ProtectedRoute path='/questions/:questionId' exact={true} >
          <QuestionDetails />
        </ProtectedRoute>
        <Route>
            <h3>404: Page Not Found</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
