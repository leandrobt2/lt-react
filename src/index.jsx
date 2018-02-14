import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from './master-page.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const render = () => {
  ReactDOM.render(<MasterPage />, document.getElementById("app"));
};

render();