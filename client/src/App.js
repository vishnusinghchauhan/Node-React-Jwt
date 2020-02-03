import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './assets/css/argon-design-system-react.min.css';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.css";



import { Router } from 'react-router-dom';
import history from "./history"
import store from './store/configureStore';
import Header from './common/Header'
import Routes from './routes';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
            <Router history={history}>
                   <Header />
                   <Routes />
            </Router>
        </Provider>
    </div>
  );
}

export default App;
