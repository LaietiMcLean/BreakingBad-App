import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { BreakingBadApp } from './BreakingBadApp';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <BreakingBadApp />
  </BrowserRouter>,
  document.getElementById('root')
);