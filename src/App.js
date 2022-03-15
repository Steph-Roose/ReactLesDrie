import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BlogPage from './pages/Blog/Blog';
import BlogPostsPage from './pages/BlogPosts/BlogPosts';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import {
    Switch,
    Route,
} from 'react-router-dom';
import PrivateRoute from "./Components/Functionals/PrivateRoute";

function App() {

  const [isAuthenticated, toggleIsAuthenticated] = useState(false);


  return (
    <>
        <NavBar />

        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path="/login">
                <LoginPage
                    isAuth={isAuthenticated}
                    toggleAuth={toggleIsAuthenticated}
                />
            </Route>

            <PrivateRoute exact
                          path="/blogposts"
                          auth={(e) => isAuthenticated}
            >
                <BlogPostsPage />
            </PrivateRoute>

            <Route path="/blogposts/:id">
                <BlogPage />
            </Route>
        </Switch>
    </>
  );
}

export default App;
