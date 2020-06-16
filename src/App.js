import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Aside from './components/utils/Aside';
import CheckAuth from './components/CheckAuth';
import Header from './components/utils/Header';
import About from './pages/About';
import Edit from './pages/Edit';
import Blog from './pages/Blog';
import Gifs from './pages/Gifs';
import Article from './pages/Article'
import DisplayGif from './pages/DisplayGif';
import Profile from './pages/Profile';
import Login from './components/users/login/Login';
import Register from './components/users/register/Register';
//import NotFound from './pages/NotFound';

function App() { 
   
  return (
    <Router>
      <div>
        <Header/>
          <div className="App">
             { localStorage.token ? <Aside/> : ''}
                  <Route exact path="/" render={props => (
                    <React.Fragment>
                        <Blog/>
                    </React.Fragment>
                  )} />
               
                
                   <Route path="/login" component={Login}/>
                   <Route path="/signup" component={Register}/>
                  <Route path="/about" component={About}/>
                  <Route path="/edit/:id" component={CheckAuth(Edit)}/>
                  <Route path="/Blog" component={CheckAuth(Blog)}/>
                  <Route path="/Gifs" component={CheckAuth(DisplayGif)}/>
                  <Route path="/article/:id" component={CheckAuth(Article)}/>
                  <Route path="/gif/:id" component={CheckAuth(Gifs)}/>
                  <Route path="/profile/edit" component={CheckAuth(Profile)}/>
                  {/* <Route exact path="*" component={NotFound} status={404} />  */}   
            </div>
      </div>
    </Router>
  );
}

export default App;
