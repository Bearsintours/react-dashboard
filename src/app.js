import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <AppRouter />
      </div>
    );
  };
};


ReactDOM.render(<App />,document.getElementById('app'));
