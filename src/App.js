import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" component={Main} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
