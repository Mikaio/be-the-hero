import 'intl'; // All pages wil can use the number formating
import 'intl/locale-data/jsonp/pt-BR'; // Setting Brazilian configuration

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}