import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { PersistGate } from 'redux-persist/integration/react';
import AlertContainer from "./components/AlertContainer";

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
      <AlertContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

