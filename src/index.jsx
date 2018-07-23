import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from './master-page.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/fonts/fontawesome-webfont.woff2';

import './assets/style/hover-effect-animate.css';
import './assets/style/hover-effect.css';
import './assets/style/main.css';
import './assets/style/style.css';
import './assets/style/responsive.css';
import './assets/style/red.css';
import './assets/style/preloader.css';

const render = () => {
  ReactDOM.render(<MasterPage />, document.getElementById("app"));
};

render();